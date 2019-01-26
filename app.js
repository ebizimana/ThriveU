var express = require("express"),
    app     = express();

app.set("view engine","ejs")
app.use(express.static(__dirname + "/public"))
app.get("/",function(req,res){
  res.render("home")
})

app.listen(3000,function(req,res){
  console.log("Server Started...");
})