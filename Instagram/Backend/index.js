let express=require("express")
let app = express();
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.listen(8080, () => {
    console.log("server started on http://localhost:8080/*");
  });