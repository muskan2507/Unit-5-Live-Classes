const User=require("../models/user.js")
const {Router}=require("express")
const userRouter=Router()
userRouter.get("/:userId",async(req,res)=>{
    const {userId}=req.params;
    const user=await User.findById(userId)
    if(user){
        res.send(user)
    }
    else{
        res.status(404).send({message:"user not found"})
    }

})
module.exports=userRouter
