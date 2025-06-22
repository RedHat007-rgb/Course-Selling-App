const express = require("express");
require("../Middlewares/admin-login");
const Router = express.Router();
const {
  signup,
  login,
  create_course,
  delete_course,
  course_content,
} = require("../controllers/admin-controller");
const admin_login = require("../Middlewares/admin-login");

Router.post("/signup", signup);
Router.use(admin_login);

Router.get("/login", login);

Router.post("/create-course", create_course);

Router.delete("/delete-course", delete_course);

Router.get("/course-content", course_content);

module.exports = Router;
