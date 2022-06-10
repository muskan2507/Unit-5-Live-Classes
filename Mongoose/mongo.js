const express=require("express");
const {connection,Movie}=require("./db.js")
let app=express();
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get("/movies",async(req,res)=>{
    const movies=await Movie.find();
  return   res.json(movies)
})
app.listen(8080,async()=>{
    try{
        await connection;
        console.log(connected)
    }
    catch{
        console.log("fail")
    }
})