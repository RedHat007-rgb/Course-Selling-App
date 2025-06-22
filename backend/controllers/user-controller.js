const { userModel } = require("../Schema/user");

const signup = async (req, res) => {
  const { email, password, first_name, last_name } = req.body;
  const duplicateUser = await userModel.findOne({ email: email });
  console.log(duplicateUser);
  try {
    if (duplicateUser) {
      return res.status(401).json({
        msge: "Please register with  different email id....",
      });
    }
    const newUser = new userModel({
      email,
      password,
      first_name,
      last_name,
    });
    const data = await newUser.save();
    console.log(data);

    return res.status(200).json({
      msge: "User created successfully",
    });
  } catch (e) {
    return res.status(500).json({
      error: e.message,
    });
  }
};

const login = (req, res) => {
  res.send("In login endpoint");
};

const purchased_course = (req, res) => {
  res.send("purchased courses");
};

module.exports = {
  login,
  signup,
  purchased_course,
};
