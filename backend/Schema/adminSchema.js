const mongoose = require("mongoose");
const schema = mongoose.Schema;

const adminSchema = new schema({
  email: { type: String, unique: true },
  password: { type: String, unique: true },
  first_name: String,
  last_name: String,
});
const userSchema = new schema({
  email: { type: String, unique: true },
  password: { type: String, unique: true },
  first_name: String,
  last_name: String,
});

const courseSchema = new schema({
  title: String,
  description: String,
  price: Number,
  imageUrl: String,
  creatorId: mongoose.Types.ObjectId,
});

const purchaseSchema = new schema({
  userId: mongoose.Types.ObjectId,
  courseId: mongoose.Types.ObjectId,
});

const userModel = new mongoose.Model("Users", userSchema);
const adminModel = new mongoose.Model("Users", adminSchema);
const courseModel = new mongoose.Model("Users", courseSchema);
const purchaseModel = new mongoose.Model("Users", purchaseSchema);

module.exports = {
  userModel,
  adminModel,
  courseModel,
  purchaseModel,
};
