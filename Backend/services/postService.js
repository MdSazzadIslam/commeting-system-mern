const postModel = require("../models/postModel");
//const clearCache = require("../services/cache");
class Service {
  static async createPost(data) {
    const post = new postModel({
      title: data.title,
      description: data.description,
      comments: data.comments,
      user: data.user,
      meta: data.meta,
      image: data.image,
    });

    try {
      const result = await postModel(post).save();
      //clearCache(postModel.collection.collectionName);
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  static async updatePost(id, data) {
    return await postModel.findOneAndUpdate({ _id: id }, { $set: data });
  }

  static async deletePost(id) {
    return await postModel.findByIdAndDelete(id);
  }

  static async getAll() {
    return await postModel
      .find()
      .sort({ _id: 1 })

      .populate("user", "firstName lastName email id activeStatus")
      .populate("comments");
  }

  static async getSumLD() {
    return await postModel.aggregate([
      {
        $project: {
          totalLikes: { $sum: "$meta.likes" },
          totalDislikes: { $sum: "$meta.dislikes" },
        },
      },
    ]);
  }

  static async getById(id) {
    return await postModel.findById(id);
  }

  static async checkUserPost(id) {
    return await postModel.findById(id);
  }

  static async updateLD(id, data) {
    return await postModel.findOneAndUpdate(
      { _id: id },
      { $push: { meta: data } }
    );
  }

  static async getUserLike(id, user) {
    return await postModel
      .find({
        _id: id,
        meta: { $elemMatch: { user: user, likes: 1 } },
      })
      .limit(1);
  }

  static async getUserDisLike(id, user) {
    console.log("id", id, "user", user);
    return await postModel
      .find({
        _id: id,
        meta: { $elemMatch: { user: user, dislikes: 1 } },
      })
      .limit(1);
  }

  static async updatePostComment(id, data) {
    console.log(id, data);
    return await postModel.updateMany(
      { _id: id },
      { $push: { comments: data } }
    );
  }
}

module.exports = Service;
