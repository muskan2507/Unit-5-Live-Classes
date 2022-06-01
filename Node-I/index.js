let obj=require("./another")
// import obj from "./another.js"
// console.log(obj)
const fs=require("fs");
const os=require("os")
fs.readFile("./test.txt",{encoding:"utf-8"},(err,data)=>{
    if(err){
        console.error(err.message)
    }
    // console.log(data);
} )
// console.log(os.cpus())
console.log(os.version())
console.log(os.arch())
