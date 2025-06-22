const express = require("express");
const Router = express.Router();
const { purchase_course, all_courses } = require("../controllers/courses");

Router.post("/purchase-course", purchase_course);

Router.get("/all-course", all_courses);
