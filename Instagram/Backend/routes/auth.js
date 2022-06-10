const {Router}=require('express')
const authRouter=Router()
const User=require("../models/user.js")

authRouter.post("/signup",(req,res)=>{
    const user=new User(req.body)
    // console.log(user)
    user.save((err,success)=>{
        if(err){
            return res.status(500).send({message:"Eroor"})
        }
       
        return res.status(201).send({message:"success"})
    })
})

authRouter.post("/login",async(req,res)=>{
  const {username,password}=req.body;
  const validateUser= await User.find({username,password})
  if(validateUser.length<1){
    return res.status(401).send({message:"Invalid creentials"})

  }
  return res.send(validateUser)
})
module.exports=authRouter
