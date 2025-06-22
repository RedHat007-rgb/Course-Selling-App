const express = require("express");
const Router = express.Router();
const { user_login } = require("../Middlewares/user-login");
const {
  signup,
  login,
  purchased_course,
} = require("../controllers/user-controller");

Router.post("/signup", signup);

Router.use(user_login);

Router.get("/login", login);

Router.get("/purchased-courses", purchased_course);

module.exports = Router;
