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

import postService from "../services/postService";

export function createPosts(data) {
  debugger;
  return async (dispatch) => {
    dispatch(createPost());
    try {
      debugger;
      await postService.createPost(data).then((res) => {
        if (res.data.success === false || res.data.success === undefined) {
          alert(res.message);
          dispatch(createPostError(res));
        } else {
          alert(res.data.message);
          dispatch(createPostSuccess(res.data.message));
        }
      });
    } catch (error) {
      dispatch(createPostError(error));
    }
  };
}

export function createPost() {
  return {
    type: CREATE_POST,
  };
}

export function createPostSuccess(success) {
  return {
    type: CREATE_POST_SUCCESS,
    payload: { success },
  };
}

export function createPostError(error) {
  return {
    type: CREATE_POST_ERROR,
    payload: { error },
  };
}

export function getPosts() {
  return async (dispatch) => {
    dispatch(getPost());
    try {
      debugger;
      await postService.getPost().then((res) => {
        if (res === "" || res === undefined) {
          dispatch(getPostError(res));
        } else {
          dispatch(getPostSuccess(res.data));
        }
      });
    } catch (error) {
      dispatch(getPostError(error));
    }
  };
}

export function getPost() {
  return {
    type: GET_POST,
  };
}

export function getPostSuccess(success) {
  return {
    type: GET_POST_SUCCESS,
    payload: { success },
  };
}

export function getPostError(error) {
  return {
    type: GET_POST_ERROR,
    payload: { error },
  };
}

export function deletePosts(id) {
  debugger;
  return async (dispatch) => {
    dispatch(deletePost());
    try {
      debugger;
      await postService.deletePost(id).then((res) => {
        debugger;
        if (res.data.success === false || res.data.success === undefined) {
          alert(res.message);
          dispatch(deletePostError(res));
        } else {
          alert(res.data.message);
          dispatch(deletePostSuccess(res.data));
        }
      });
    } catch (error) {
      dispatch(deletePostError(error));
    }
  };
}

export function deletePost() {
  return {
    type: DELETE_POST,
  };
}

export function deletePostSuccess(success) {
  return {
    type: DELETE_POST_SUCCESS,
    payload: { success },
  };
}

export function deletePostError(error) {
  return {
    type: DELETE_POST_ERROR,
    payload: { error },
  };
}
export function updateLikes(id) {
  debugger;
  return async (dispatch) => {
    dispatch(updateLike());
    try {
      debugger;
      await postService.updateLike(id).then((res) => {
        debugger;
        if (res.status === 201 && res.data !== undefined) {
          dispatch(updateLikeSuccess(res.data.message));
        } else {
          dispatch(updateLikeError(res.message));
        }
      });
    } catch (error) {
      dispatch(updateLikeError(error));
    }
  };
}

export function updateLike() {
  return {
    type: UPDATE_LIKE,
  };
}

export function updateLikeSuccess(success) {
  return {
    type: UPDATE_LIKE_SUCCESS,
    payload: { success },
  };
}

export function updateLikeError(error) {
  return {
    type: UPDATE_LIKE_ERROR,
    payload: { error },
  };
}

export function updateDisLikes(id) {
  debugger;
  return async (dispatch) => {
    dispatch(updateDisLike());
    try {
      debugger;
      await postService.updateDisLike(id).then((res) => {
        debugger;
        if (res.status === 201 && res.data !== undefined) {
          dispatch(updateDisLikeSuccess(res.data.message));
        } else {
          dispatch(updateDisLikeError(res));
        }
      });
    } catch (error) {
      dispatch(updateDisLikeError(error));
    }
  };
}

export function updateDisLike() {
  return {
    type: UPDATE_DISLIKE,
  };
}

export function updateDisLikeSuccess(success) {
  return {
    type: UPDATE_DISLIKE_SUCCESS,
    payload: { success },
  };
}

export function updateDisLikeError(error) {
  return {
    type: UPDATE_DISLIKE_ERROR,
    payload: { error },
  };
}
