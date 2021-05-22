import {
  CREATE_COMMENT,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_ERROR,
} from "../constants/commentConstant";

const initialState = {
  comments: [],
  data: {},
  saved: false,
  loading: false,
  error: null,
};

export default function commentReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_COMMENT:
      return {
        ...state,
        saved: false,
      };

    case CREATE_COMMENT_SUCCESS:
      return {
        ...state,
        saved: true,
        data: action.payload.success,
      };

    case CREATE_COMMENT_ERROR:
      return {
        ...state,
        saved: false,
        error: action.payload.error,
        data: {},
      };

    default:
      return state;
  }
}
