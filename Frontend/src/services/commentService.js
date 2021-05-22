import http from "../config";

class commentService {
  static createComment = async (pId, comment) => {
    debugger;
    return await http
      .post(`comment/create`, {
        text: comment,
        post: pId,
      })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err.response.data;
      });
  };
}
export default commentService;
