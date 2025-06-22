const mongoose = require("mongoose");
const schema = mongoose.Schema;
const userSchema = new schema({
  email: { type: String, unique: true },
  password: { type: String },
  first_name: String,
  last_name: String,
});

const userModel = new mongoose.model("Users", userSchema);

module.exports = {
  userModel,
};
