const http=require("http")
const fs=require("fs")
const server=http.createServer((req,res)=>{
    // res.write("hello world")
// res.end("hello world")
// res.setHeader("content-type","text/plain")
// res.end("[1,2,3]")
if(req.url=="/"){
    // res.end("hello world")
    fs.readFile("./index.html",{encoding:"utf-8"},(err,data)=>{
        if(err){
            res.end(err)
            console.log('err occur')
        }
        res.setHeader("content-type","text/html")
        res.end(data)
    })

}
if(req.url=="/products"){
    res.setHeader("content-type","application/json")
    return res.end(JSON.stringify([1,2,3,4]))
}
if(req.url=="/file"){
    fs.readFile("./index.txt",{encoding:"utf-8"},(err,data)=>{
        if(err){
            res.end(err)
        }
        res.end(data)
    })
}
if(req.url=="/stream"){
    const readStream=fs.createReadStream("/index.txt")
    readStream.pipe(res)
}
})

server.listen(8080,()=>{
console.log("server started on port http://localhost:8080/*")
})