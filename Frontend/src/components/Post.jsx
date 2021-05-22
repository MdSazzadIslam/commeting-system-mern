import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPosts } from "../actions/postAction";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Post = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [file, setFile] = useState("");
  const [error, setError] = useState("");
  const [disabled, setDisabled] = useState(false);
  const postReducer = useSelector((state) => state.postReducer);
  const { data } = postReducer;
  const history = useHistory();
  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    setDisabled(true);
    const err = validate(title, description);
    debugger;
    if (err.title !== undefined || err.description !== undefined) {
      alert("Error");
      setDisabled(false);
    } else if (file.size === undefined) {
      alert("Please select an image");
      setDisabled(false);
    } else if (
      file.type !== "image/jpg" &&
      file.type !== "image/png" &&
      file.type !== "image/jpeg"
    ) {
      alert("Please select jpeg or png image");
      setDisabled(false);
    } else {
      debugger;
      let formData = new FormData();
      formData.append("image", file);
      formData.append("title", title);
      formData.append("description", description);
      console.log(formData);
      //const data = file;
      await dispatch(createPosts(formData));
      setDisabled(false);

      if (data === "Successful") {
        history.push("/dashhoboard/feed");
      }
    }
  };

  const validate = (title, description) => {
    const errors = {};
    debugger;

    if (title === "" || title === undefined) {
      errors.title = setError("Please enter title");
      return;
    }
    if (description === "" || description === undefined) {
      errors.description = setError("Please enter title");
      return;
    }
    return errors;
  };

  const handleFilechange = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      setFile(file);
      setImageUrl(reader.result);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="container mt-5">
      <div className="row d-flex justify-content-center">
        <div className="col-md-8">
          <div className="headings d-flex justify-content-between align-items-center mb-3">
            <h5>Write your post</h5>
          </div>

          <div className="card p-3">
            <div className="container">
              <div className="post">
                {error !== "" ? (
                  <div className="error">
                    <span style={{ color: "red" }}>{error} </span>
                  </div>
                ) : (
                  ""
                )}
                <div className="form-group">
                  <form onSubmit={(e) => submitHandler(e)}>
                    <label htmlFor="title">Title</label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      className="form-control"
                      placeholder="Title..."
                      required
                      onChange={(e) => setTitle(e.target.value)}
                    />
                    <label htmlFor="description">Description</label>
                    <textarea
                      type="text"
                      id="description"
                      name="lastname"
                      className="form-control"
                      placeholder="Description..."
                      required
                      onChange={(e) => setDescription(e.target.value)}
                    />

                    <label htmlFor="file">File</label>
                    <input
                      type="file"
                      id="file"
                      name="file"
                      className="form-control"
                      placeholder="Image.."
                      onChange={(e) => handleFilechange(e)}
                    />

                    <img
                      src={imageUrl}
                      alt="Logo"
                      style={{
                        height: 100,
                        width: 100,
                        borderRadius: 5,
                        overflow: "hidden",
                        alignItems: "center",
                        borderWidth: 1,
                        borderColor: "black",
                      }}
                    />

                    <div className="form-group m-0">
                      <button
                        type="submit"
                        className="btn btn-primary btn-block"
                        disabled={disabled}
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
