const express = require("express");
let fs=require("fs");
let app = express();
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get("/",(req,res)=>{
    res.write("hello");
    res.end("world")
})
app.get("/products",(req,res)=>{
   
    // res.end(JSON.stringify({a:1,b:2}))
    fs.readFile("./db.json",{encoding:"utf-8"},(err,data)=>{
        res.end(data)
    })
})
app.post("/products",(req,res)=>{
    // console.log(req.data)
    // res.end("got data")

    fs.readFile("./db.json",{encoding:"utf-8"},(err,data)=>{
        const parsed=JSON.parse(data);
        parsed.products=[...parsed.products,req.body]
        fs.writeFile("./db.json",JSON.stringify(parsed),"utf-8",()=>{
            res.send("products created")
        })
    })
})

app.listen(8080, () => {
    console.log("server started on http://localhost:8080/*");
  });