const mongoose=require("mongoose")
const connection=mongoose.connect("mongodb://localhost:27017/IMDB")
const MovieSchema=new mongoose.Schema({
    title:{type:String,required:true},
    rating:Number,
    releasedate:Date,
    earning:{type:Number,default:1000,min:0,max:10000},
    cast:{type:[String]},
    language:{type:String,enum:["Hindi","English"]}

})
const Movie=mongoose.model("movie",MovieSchema)
const main=async()=>{
const conn=await connection

console.log("connected successfuly")
// const movie=new Movie({
//     title:"Jab Jak HAi Jaan",
//     rating:4.5,
//     releasedate:new Date(),
//     cast:["Shahrukh Khan","katrinaa Kaif","Anushka Sharma"],
//     earning:8000,
//     language:"Hindi"
// })
// await movie.save()
// console.log("added")
const movies=await Movie.find()
console.log("all movies",movies)
conn.disconnect()
}
main()