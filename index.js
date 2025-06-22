require("dotenv").config();
const express=require("express");
const app=express();
const PORT=process.env.PORT ;
const admin_router=require("./backend/routes/admin-routes");
const user_router=require("./backend/routes/user-routes")

console.log("ello from index")
app.use("/api/v1/admin",admin_router);

app.use("/api/v1/user",user_router);







app.listen(PORT,()=>{
    console.log(`Server is listening to ${PORT}......`)
})