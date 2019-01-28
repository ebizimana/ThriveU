var express = require("express"),
    router = express.Router();

// Home Page
router.get("/",function(req,res){
  res.render("home")
})

// GET Login Form
// POST login Form

// GET Register Form
router.get("/register",function(req,res){
  res.render("register")
})
// POST Register Form
module.exports = router
