import mongoose from "mongoose";

const custSchema=new mongoose.Schema({
    name:{type:String, required:true ,trim:true},
    age:{type:Number, required:true},
    email:{type:String,required:true}
});

const userModel=mongoose.model("user",custSchema);

export default userModel