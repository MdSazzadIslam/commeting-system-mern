import {
  CREATE_COMMENT,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_ERROR,
} from "../constants/commentConstant";
import commentService from "../services/commentService";

export function createComments(pId, comment) {
  debugger;
  return async (dispatch) => {
    dispatch(createComment());
    try {
      debugger;
      await commentService.createComment(pId, comment).then((res) => {
        if (res.data.success === false || res.data.success === undefined) {
          alert(res.message);
          dispatch(createCommentError(res));
        } else {
          //alert(res.data.message);
          dispatch(createCommentSuccess(res.data.message));
        }
      });
    } catch (error) {
      dispatch(createCommentError(error));
    }
  };
}

export function createComment() {
  return {
    type: CREATE_COMMENT,
  };
}

export function createCommentSuccess(success) {
  return {
    type: CREATE_COMMENT_SUCCESS,
    payload: { success },
  };
}

export function createCommentError(error) {
  return {
    type: CREATE_COMMENT_ERROR,
    payload: { error },
  };
}
