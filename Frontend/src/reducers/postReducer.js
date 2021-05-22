import {
  CREATE_POST,
  CREATE_POST_SUCCESS,
  CREATE_POST_ERROR,
  GET_POST,
  GET_POST_SUCCESS,
  GET_POST_ERROR,
  DELETE_POST,
  DELETE_POST_SUCCESS,
  DELETE_POST_ERROR,
  UPDATE_LIKE,
  UPDATE_LIKE_SUCCESS,
  UPDATE_LIKE_ERROR,
  UPDATE_DISLIKE,
  UPDATE_DISLIKE_SUCCESS,
  UPDATE_DISLIKE_ERROR,
} from "../constants/postConstants";

const initialState = {
  posts: [],
  post: {},
  data: {},
  saved: false,
  loading: false,
  error: null,
};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_POST:
      return {
        ...state,
        saved: false,
      };

    case CREATE_POST_SUCCESS:
      return {
        ...state,
        saved: true,
        data: action.payload.success,
      };

    case CREATE_POST_ERROR:
      return {
        ...state,
        saved: false,
        error: action.payload.error,
        data: {},
      };

    case GET_POST:
      return {
        ...state,
        loading: true,
      };

    case GET_POST_SUCCESS:
      debugger;
      let post = action.payload.success.posts;
      let lds = action.payload.success.lds;
      if (post.length > 0) {
        for (let i = 0; i < post.length; i++) {
          let uId = post[i]._id;
          for (let j = 0; j < lds.length; j++) {
            let userId = lds[j]._id;

            if (uId === userId) {
              let totalLikes = lds[j].totalLikes;
              let totalDislikes = lds[j].totalDislikes;
              post[i].totalLikes = totalLikes;
              post[j].totalDislikes = totalDislikes;
            }
          }
        }
      }

      return {
        ...state,
        loading: false,
        posts: post,
      };

    case GET_POST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        posts: [],
      };

    case DELETE_POST:
      return {
        ...state,
        deleted: false,
      };

    case DELETE_POST_SUCCESS:
      return {
        ...state,
        deleted: true,
        data: action.payload.success,
      };

    case DELETE_POST_ERROR:
      return {
        ...state,
        deleted: false,
        error: action.payload.error,
        data: {},
      };

    case UPDATE_LIKE:
      return {
        ...state,
        saved: false,
      };

    case UPDATE_LIKE_SUCCESS:
      return {
        ...state,
        saved: true,
        data: action.payload.success,
        error: null,
      };

    case UPDATE_LIKE_ERROR:
      return {
        ...state,
        deleted: false,
        error: action.payload.error,
        data: {},
      };

    case UPDATE_DISLIKE:
      return {
        ...state,
        saved: false,
      };

    case UPDATE_DISLIKE_SUCCESS:
      return {
        ...state,
        saved: true,
        data: action.payload.success,
      };

    case UPDATE_DISLIKE_ERROR:
      return {
        ...state,
        deleted: false,
        error: action.payload.error,
        data: {},
      };

    default:
      return state;
  }
}
