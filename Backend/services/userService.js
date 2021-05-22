const userModel = require("../models/userModel");
const mongoose = require("mongoose");

class userService {
  static async login(data) {
    return await userModel.create({ data });
  }

  static async registration(data) {
    const user = new userModel({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
      active: data.active,
    });

    return await userModel(user).save();
  }

  /*   static async updateUser(id, data) {
    return await userModel.findOneAndUpdate(id, { $set: data });
  } */

  static async updateUser(id, data) {
    console.log(id, data);
    return await userModel.findByIdAndUpdate(id, { $set: data });
  }

  static async checkEmailExist(email) {
    return await userModel.findOne({ email });
  }

  static async checkActiveStatus(email) {
    return await userModel.findOne({ email: email, activeStatus: false });
  }

  static async checUserExist(data) {
    const { email, password } = data;
    return await await userModel.findOne({ email }).select("+password");
  }

  static async deleteUser(id) {
    return await userModel.findOneAndDelete(id);
  }

  static async getAll() {
    return await userModel.find({});
  }

  static async getById(id) {
    return await userModel.findById(id);
  }
}

module.exports = userService;
