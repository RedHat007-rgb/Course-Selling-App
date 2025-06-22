const express=require("express");
const Router=express.Router();

Router.get("/login",(req,res)=>{
    res.send("In login endpoint");
})


Router.post("/signup",(req,res)=>{
    res.send("In Signup endpoint");
})

Router.post("/purchase-course",(req,res)=>{
    res.send("IN purchse course endpoint")
})

Router.get("/all-course",(req,res)=>{
    res.send("in all-course")
})


Router.get("/purchased-courses",(req,res)=>{
    res.send("purchased courses")
})


module.exports=Router;