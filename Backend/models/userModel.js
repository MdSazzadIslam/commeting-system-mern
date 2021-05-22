const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: true,
      minlength: 5,
      maxlength: 150,
    },

    lastName: {
      type: String,
      trim: true,
      required: true,
      minlength: 5,
      maxlength: 150,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
      maxlength: 1024,
    },

    profileImage: {
      type: String,
    },
    bannerImage: {
      type: String,
    },
    phoneNo: {
      type: String,
    },
    telephoNo: {
      type: String,
    },
    gender: {
      type: String,
    },

    activeStatus: {
      type: Boolean,
      default: false,
    },

    location: {
      type: String,
    },
  },

  {
    timestamps: true,
  }
);

/* userSchema.path("email").validate((val) => {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(val);
}, "Invalid e-mail."); */

/* function validateUser(user) {
  const schema = {
    name: Joi.string().min(5).max(150).required(),
    email: Joi.string().min(5).max(150).required().email(),
    password: Joi.string().min(5).max(1024).required(),
  };
  return Joi.validate(user, schema);
} */

const User = mongoose.model("User", userSchema);
module.exports = User;
//exports.validate = validateUser;
