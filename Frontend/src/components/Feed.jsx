import React, { useState, useEffect } from "react";
import {
  getPosts,
  deletePosts,
  updateLikes,
  updateDisLikes,
} from "../actions/postAction";
import { createComments } from "../actions/commentAction";
import { useDispatch, useSelector } from "react-redux";

import moment from "moment";
import "./Feed.css";

const Feed = () => {
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  const postReducer = useSelector((state) => state.postReducer);
  const { posts, loading } = postReducer;
  const uId = JSON.parse(localStorage.getItem("user"))["_id"];

  const fetchPost = async () => {
    await dispatch(getPosts());
  };

  useEffect(() => {
    fetchPost();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const deletePost = async (e, id) => {
    debugger;
    e.preventDefault();
    await dispatch(deletePosts(id));
    await fetchPost();
  };

  const updateLike = async (e, id) => {
    e.preventDefault();
    await dispatch(updateLikes(id));
    await fetchPost();
    clearComment();
  };

  const updateDisLike = async (e, id) => {
    e.preventDefault();
    await dispatch(updateDisLikes(id));
    await fetchPost();
    clearComment();
  };

  const saveComment = async (e, pId) => {
    debugger;
    if (e.key === "Enter" && comment) {
      console.log(pId, comment);
      await dispatch(createComments(pId, comment));
      await fetchPost();
      clearComment();
    }
  };

  const clearComment = () => {
    setComment("");
  };

  const Loader = () => {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status"></div>
      </div>
    );
  };

  const postData = posts.map((item, idx) => {
    const imageUrl = `${process.env.REACT_APP_IMAGE_URL + item.image}`;
    let comments = posts[idx].comments;
    let commentsLength = posts[idx].comments.length;

    const commentData = comments.map((comment, idx) => {
      return (
        <div className="col-xs-10 col-md-11">
          <div className="mic-info"> {comment.text}</div>
          <div className="action"></div>
        </div>
      );
    });

    return (
      <div className="container mt-5" key={item._id}>
        <div className="row d-flex justify-content-center">
          <div className="col-md-8">
            <div className="card p-3 ">
              <div className="d-flex justify-content-between align-items-center">
                <div className="user d-flex flex-row align-items-center">
                  <img
                    src={imageUrl}
                    alt={item.image}
                    style={{ width: "50px", height: "50px" }}
                    className="user-img rounded-circle mr-2"
                  />

                  <span>
                    <small className="font-weight-bold text-primary">
                      {item.user.firstName + " " + item.user.lastName}
                    </small>
                    {item.user._id === uId ? (
                      <>
                        <small className="font-weight-bold">
                          <p
                            style={{
                              color: "yellow",
                              backgroundColor: "darkblue",
                            }}
                          >
                            {"[" + item.user.email + "]"}
                          </p>
                        </small>
                      </>
                    ) : (
                      <small className="font-weight-bold">
                        {"[" + item.user.email + "]"}
                      </small>
                    )}
                  </span>
                </div>

                <div className="action d-flex justify-content-between mt-2 align-items-center">
                  {item.user._id === uId ? (
                    <>
                      <a
                        href="####"
                        onClick={(e) => deletePost(e, item._id)}
                        style={{ margin: "5px" }}
                      >
                        <small>Delete</small> <span className="dots" />
                      </a>
                    </>
                  ) : null}
                </div>
              </div>

              <div className="action d-flex justify-content-between mt-2 align-items-center">
                <div className="reply px-4">
                  <small> {moment(item.createdAt).format("DD/MM/YYYY")}</small>
                  <h6 style={{ textDecoration: "underline" }}>
                    Tag:{item.title}
                  </h6>
                  <p>{item.description}</p>
                </div>
                <div className="icons align-items-center">
                  <i className="fa fa-star text-warning" />
                  <i className="fa fa-check-circle-o check-icon" />
                </div>
              </div>

              <div className="action d-flex justify-content-between mt-2 align-items-center">
                <div className="reply px-4">
                  <small> [{item.totalLikes}]</small>

                  <a
                    href="####"
                    onClick={(e) => updateLike(e, item._id)}
                    style={{ margin: "5px" }}
                  >
                    <small>Like</small> <span className="dots" />
                  </a>

                  <a
                    href="####"
                    onClick={(e) => updateDisLike(e, item._id)}
                    style={{ margin: "5px" }}
                  >
                    <small>Dislike</small>
                  </a>

                  <small>[{item.totalDislikes}]</small>
                </div>
                <div className="icons align-items-center">
                  <i className="fa fa-star text-warning" />
                  <i className="fa fa-check-circle-o check-icon" />
                </div>
              </div>

              <div className="container">
                <div className="row">
                  <div className="panel panel-default widget">
                    <div className="panel-heading">
                      <span className="glyphicon glyphicon-comment" />
                      <h3 className="panel-title">Recent Comments</h3>
                      <span className="label label-info">{commentsLength}</span>
                    </div>
                    <div className="panel-body">
                      <ul className="list-group">
                        <li className="list-group-item">
                          <div className="row">{commentData}</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="please enter comment/feedback and then press enter"
                className="form-control"
                name="comment"
                value={[idx].comment}
                onChange={(e) => setComment(e.target.value)}
                onKeyDown={(e) => saveComment(e, item._id)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  });

  if (posts.length === 0) return <p class="title">No record found...</p>;
  if (loading === true) {
    return <Loader />;
  } else return <div className="container">{postData}</div>;
};

export default Feed;
