let express=require("express")
let app=express();
const helmet=require("helmet")
const groceryRouter=require("./routes/groceries.route")
// app.use("/",groceryRouter)
app.use((req,res,next)=>{
    console.log("Route: ",req.url,">Method: ",req.method,"At: ",new Date());
    next()
})
app.use((req,res,next)=>{
    if(!req.headers["apikey"]){
        return res.status(401).send("user not authorised")
    }
    next()
})
app.use((req,res,next)=>{
     let t1=performance.now();
    next()
    let t2=performance.now();
    console.log(t2-t1)
})
app.get("/",(req,res)=>{
    res.send("hello")
})
app.use(helmet())
app.listen(8080)