const mongoose=require("mongoose")
const UserSchema=new mongoose.Schema({
    name:{type:String,required:true},
    phone:Number,
    email:{type:String},
    username:String,
    password:{type:String,minlength:8},
   country:String,
   gender:{type:String,enum:['Male','Female']}

})

const User=mongoose.model("user",UserSchema)
module.exports=User