const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 20,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      maxlength: 50,
      unique: true,
    },
    address: {
      type: String,
      required: true,
      min: 6,
    },
    phone_no: {
      type: Number,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default: "",
    },
    experience: {
      type: Number,
    },
    current_ctc: {
      type: Number,
    },
    expected_ctc: {
      type: Number,
    },
    notice_period: {
      type: Number,
    },
    resume: {
      type: String,
    },
    isOpenToWork: {
      type: Boolean,
      default: false,
    },
    following:{
      type:Array
    },
    // userRole:{
    //   type:String,
    //   required:true
    // }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
