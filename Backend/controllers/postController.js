"use strict";

const postService = require("../services/postService");

require("dotenv").config({ path: "../.env" });

const redis = require("redis");
const client = redis.createClient(
  process.env.REDIS_PORT,
  process.env.REDIS_HOST
);

client.on("error", (err) => {
  console.log(err);
});

exports.getAll = async (req, res, next) => {
  try {
    const posts = await postService.getAll();
    const lds = await postService.getSumLD();

    return res.status(200).send({
      posts: posts,
      lds: lds,
      msg: "Successfull",
      success: true,
    });
  } catch (error) {
    return res.status(500).send({ message: "Server error" });
  }
};

exports.getById = async (req, res, next) => {
  try {
    const result = await postService.getById(req.params.id);
    if (result) {
      res.json({
        _id: result._id,
      });
    }
  } catch (error) {
    return res.status(500).send({ message: "Server error" });
  }
};

exports.getSumLD = async (req, res, next) => {
  try {
    const lds = await postService.getSumLD();
    return res.status(200).send({
      lds: lds,
      msg: "Successfull",
      success: true,
    });
  } catch (error) {
    return res.status(500).send({ message: "Server error" });
  }
};

exports.createPost = async (req, res, next) => {
  if (!req.file) {
    return res
      .status(400)
      .send({ success: false, msg: "Only image are allowed" });
  }

  if (!req.body.title || !req.body.description)
    return res.status(400).send("Please enter title or description");

  const data = {
    image: req.file.filename,
    title: req.body.title,
    description: req.body.description,
    user: req.userId,
  };

  const result = await postService.createPost(data);

  if (result) {
    return res.status(201).send({ success: true, message: "Successful" });
  } else {
    return res
      .status(400)
      .send({ success: false, message: "Something went wrong" });
  }
};

exports.deletePost = async (req, res, next) => {
  const isUserPostExists = await postService.checkUserPost(req.params.id);

  if (isUserPostExists) {
    try {
      await postService.deletePost(req.params.id);
      return res.status(200).send({ success: true, message: "Successful" });
    } catch (error) {
      return res
        .status(404)
        .send({ success: false, message: "Record not found" });
    }
  } else {
    return res
      .status(404)
      .send({ success: false, message: "Record not found" });
  }
};

exports.updatePost = async (req, res, next) => {
  const result = await postService.checkUserPost(req.params.id);

  if (result) {
    result.text = req.body.text || result.text;
    result.comments = req.body.comments || result.comments;
    result.user = req.body.user || result.user;
    result.meta = req.body.meta || result.meta;

    const newPost = await postService.updateUser(req.params.id, result);
    res.json({
      _id: newPost._id,
      text: newPost.text,
      comments: newPost.comments,
      user: newPost.user,
      meta: newPost.meta,
    });
  } else {
    return res.status(404).send({ message: "User not found" });
  }
};

exports.updateLike = async (req, res, next) => {
  console.log(req.userId);
  const isUserLiked = await postService.getUserLike(req.body.id, req.userId);
  if (isUserLiked.length !== 1) {
    var data = {
      likes: 1,
      user: req.userId,
    };

    const result = await postService.updateLD(req.body.id, data);

    return res
      .status(201)
      .send({ success: true, message: "Successfully liked" });
  } else {
    return res
      .status(409)
      .send({ success: false, message: "You have already liked" });
  }
};

exports.updateDisLike = async (req, res, next) => {
  debugger;

  const isUserDisLiked = await postService.getUserDisLike(
    req.body.id,
    req.userId
  );

  if (isUserDisLiked.length !== 1) {
    var data = {
      dislikes: 1,
      user: req.userId,
    };
    const result = await postService.updateLD(req.body.id, data);
    return res
      .status(201)
      .send({ success: true, message: "Successfully disliked" });
  } else {
    return res
      .status(409)
      .send({ success: false, message: "You have already disliked" });
  }
};

/* const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, callback) {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
      }
      callback(null, "./images");
    },
    filename: function (req, file, callback) {
      callback(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  }),

  fileFilter: function (req, file, callback) {
    var ext = path.extname(file.originalname);
    if (ext !== ".png" && ext !== ".jpg" && ext !== ".gif" && ext !== ".jpeg") {
      return callback( null, false);
    }
    callback(null, true);
  },
}); */
