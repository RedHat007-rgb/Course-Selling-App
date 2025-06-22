const { adminModel } = require("../Schema/adminSchema");
const bcrypt = require("bcrypt");
const signup = async (req, res) => {
  const { email, password, first_name, last_name } = req.body;
  const duplicateUser = await adminModel.findOne({ email: email });
  console.log(duplicateUser);
  try {
    if (duplicateUser) {
      return res.status(401).json({
        msge: "Please register with  different email id....",
      });
    }

    await bcrypt.hash(password, 10, async function (err, hash) {
      if (err) {
        return res.status(400).json({
          message: "Error.....",
        });
      }
      const newUser = new adminModel({
        email,
        password: hash,
        first_name,
        last_name,
      });
      await newUser.save();
      return res.status(200).json({
        msge: "Admin created successfully",
      });
    });
  } catch (e) {
    return res.status(500).json({
      error: e.message,
    });
  }
};

const login = (req, res) => {
  res.send("In admin-login endpoint");
};

const create_course = (req, res) => {
  res.send("IN create-course");
};

const delete_course = (req, res) => {
  res.send("in delete-course");
};

const course_content = (req, res) => {
  res.send("course-content");
};

module.exports = {
  signup,
  login,
  course_content,
  create_course,
  delete_course,
};
