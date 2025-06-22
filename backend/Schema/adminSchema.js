const mongoose = require("mongoose");
const schema = mongoose.Schema;

const adminSchema = new schema({
  email: { type: String, unique: true },
  password: String,
  first_name: String,
  last_name: String,
});

const adminModel = new mongoose.model("Admin", adminSchema);

module.exports = {
  adminModel,
};
