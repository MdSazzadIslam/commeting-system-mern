"use strict";

const commentService = require("../services/commentService");
const postService = require("../services/postService");

exports.getAll = async (req, res, next) => {
  try {
    const result = await commentService.getAll();
    res.json(result);
  } catch (error) {
    return res.status(500).send({ message: "Server error" });
  }
};

exports.getById = async (req, res, next) => {
  try {
    const result = await commentService.getById(req.params.id);
    if (result) {
      res.json({
        _id: result._id,
        feedback: result.feedback,
        userId: result.userId,
      });
    }
  } catch (error) {
    return res.status(500).send({ message: "Server error" });
  }
};

exports.createComment = async (req, res, next) => {
  if (!req.body.text || !req.body.post) {
    res
      .status(400)
      .send({ success: false, msg: "Please fillup required field" });
  }
  const data = {
    text: req.body.text,
    post: req.body.post,
    user: req.userId,
  };

  const result = await commentService.createComment(data);

  if (result) {
    const response = await postService.updatePostComment(
      req.body.post,
      result._id
    );
    if (response) {
      return res
        .status(201)
        .send({ success: true, message: "Inserted successfully" });
    }
  } else {
    return res
      .status(400)
      .send({ success: false, message: "Something went wrong" });
  }
};

exports.deleteComment = async (req, res, next) => {
  const result = await commentService.checkUserComment(req.body);

  if (result) {
    try {
      await commentService.deleteComment(result._id);
      return res.status(200).send({ message: "Deleted successfully" });
    } catch (error) {
      return res.status(404).send({ message: "Record not found" });
    }
  } else {
    return res.status(404).send({ message: "Record not found" });
  }
};

exports.updateComment = async (req, res, next) => {
  const result = await commentService.checkUserComment(
    req.params.uId,
    req.params.cId
  );

  if (user) {
    result.feedback = req.body.feedback || result.feedback;
    result.userId = req.body.userId || result.userId;

    const newUser = await commentService.updateUser(
      req.params.uId,
      req.params.cId,
      user
    );
    res.json({
      _id: newUser._id,
      feedback: newUser.feedback,
      userId: newUser.userId,
    });
  } else {
    return res.status(404).send({ message: "User not found" });
  }
};
