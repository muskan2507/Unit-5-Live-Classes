let express=require("express")
const connection=require("./storage/db")
const cors=require("cors")
let authRouter=require("./routes/auth");
const userRouter = require("./routes/user");
let app = express();
app.use(cors({
  origin:["http://localhost:3000"]
}))

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use("/auth",authRouter)
app.use("/profile",userRouter)
app.listen(8080,async () => {
  await connection;
  console.log("connected")
  
    console.log("server started on http://localhost:8080/*");
  });