require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const MONGOURL = process.env.MONGODB_URL;
const admin_router = require("./backend/routes/admin-routes");
const user_router = require("./backend/routes/user-routes");
const course_router = require("./backend/routes/course-routes");
const dbconnect = require("./backend/db/db");

app.use(express.json());

app.use("/api/v1/admin", admin_router);

app.use("/api/v1/user", user_router);

app.use("/api/v1/course", course_router);

const connect = async () => {
  await dbconnect(MONGOURL);
  app.listen(PORT, () => {
    console.log(`Server is listening to ${PORT}......`);
  });
};

connect();
