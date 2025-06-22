const express=require("express");
const Router=express.Router();

Router.get("/login",(req,res)=>{
    console.log("hi")
    res.send("In admin-login endpoint");
})


Router.post("/signup",(req,res)=>{
    res.send("In admin-Signup endpoint");
})

Router.post("/create-course",(req,res)=>{
    res.send("IN create-course")
})

Router.delete("/delete-course",(req,res)=>{
    res.send("in delete-course")
})


Router.get("/course-content",(req,res)=>{
    res.send("course-content")
})


module.exports=Router;