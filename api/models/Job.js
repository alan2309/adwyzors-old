const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const jobSchema = new mongoose.Schema(
    {
      title:{
        type:String,
        required:true,
      },
      company_id:{
        type:String,
        required:true
      },
      company_pic:{
        type:String,
      },
      desc: {
        type: String,
      },
      canidates:[
        {id:{type:ObjectId,ref:'User'},
        name:{type:String},
        profile_pic:{type:String},
        qualification:{type:String},
        apply_time:{type:String}
      }
      ],
      ctc: {
        type: String,
      },
      upvotes:{
        type:Number,
        default:0,
      },
      downvotes:{
        type:Number,
        default:0,
      },
      requirements:{
        type:Array
      }
    },
    { timestamps: true }
  );
  
  module.exports = mongoose.model("jobs", jobSchema);