const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const companySchema = new mongoose.Schema(
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
    city:{
        type:String
    },
    contact_no: {
      type: Number,
      required: true,
    },
    employees_no: {
      type: Number,
      required: true,
    },
    description:{
        type:String,
        required:true,
    },
    field: {
      type: String,
    },
    recent_jobs:[
        {
            id:{type:ObjectId,ref:"jobs"},
            desc:{type:String},
            prof_pic:{type:String,default:""}
        }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Com", companySchema);
