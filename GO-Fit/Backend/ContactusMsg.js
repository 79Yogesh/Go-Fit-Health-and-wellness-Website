import mongoose, { Schema } from "mongoose";

const ContactGofitSchema=new Schema({
   name:String,
   email:String,
   subject:String,
   message:String

});

export const Contact=mongoose.model("ContactUsMsg",ContactGofitSchema);