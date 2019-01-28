//***************** App Init ********************//
var express  = require("express"),
    // DB variables
    mongoose = require("mongoose"),
    url      = "mongodb://localhost/thriveU"
    // User variables
    passport              = require("passport"),
    passportLocal         = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose"),
    expressSession        = require("express-session")

    app      = express();


//*****************App Config ********************//
mongoose.connect(url, {useNewUrlParser: true })
app.set("view engine","ejs")
app.use(express.static(__dirname + "/public"))


//******************Routes **********************//
// Router variables
var indexRouter = require("./routes/index.js")
// Router Config
app.use(indexRouter)


app.listen(3000,function(req,res){
  console.log("Server Started...");
})
