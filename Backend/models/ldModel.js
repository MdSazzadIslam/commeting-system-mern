const mongoose = require("mongoose");

const ldSchema = new mongoose.Schema(
  {
    like: {
      type: Number,
    },
    dislike: {
      type: Number,
    },

    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Ld = mongoose.model("Image", ldSchema);
module.exports = Ld;
