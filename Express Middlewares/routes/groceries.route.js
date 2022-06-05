const {Router}=require("express")
const groceryRouter=Router()
groceryRouter.get("/get",(req,res)=>{
  res.send("middlewares")
})
module.exports=groceryRouter