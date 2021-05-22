import http from "../config";
import axios from "axios";

class postService {
  static createPost = async (image) => {
    console.log(image);
    const token = JSON.parse(localStorage.getItem("user"))["token"];

    return await axios({
      method: "post",
      url: process.env.REACT_APP_API_URL + "post/create",
      data: image,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        //handle success

        console.log(res);
        return res;
      })
      .catch((err) => {
        //handle error

        console.log(err.response);
        return err.response;
      });
  };

  static getPost = async () => {
    debugger;
    return await http
      .get("/post")
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err.response.data;
      });
  };

  static deletePost = async (id) => {
    return await http
      .delete(`post/delete/${id}`)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err.response.data;
      });
  };

  static updateLike = async (id) => {
    return await http
      .post(`post/updateLike`, {
        id,
      })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err.response.data;
      });
  };

  static updateDisLike = async (id) => {
    return await http
      .post(`post/updateDisLike`, {
        id,
      })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err.response.data;
      });
  };
}
export default postService;
