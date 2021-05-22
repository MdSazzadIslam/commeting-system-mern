const commentModel = require("../models/commentModel");
const mongoose = require("mongoose");

class commentService {
  static async createComment(data) {
    const user = new commentModel({
      text: data.text,
      post: data.post,
      user: data.user,
    });

    return await commentModel(user).save();
  }

  static async updateComment(id, data) {
    return await commentModel.findOneAndUpdate(id, { $set: data });
  }

  static async deleteComment(id) {
    return await commentModel.findOneAndDelete(id);
  }

  static async getAll() {
    return await commentModel
      .find({})
      .populate("user", "firstName lastName email id activeStatus");
  }

  static async getById(id) {
    return await commentModel.findById(id);
  }

  static async checkUserComment(data) {
    const { id, userId } = data;

    return await commentModel.find({
      userId: userId,
      _id: mongoose.Types.ObjectId(id),
    });
  }
}

module.exports = commentService;
