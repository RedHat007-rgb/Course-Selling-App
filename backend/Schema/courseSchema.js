const courseSchema = new schema({
  title: String,
  description: String,
  price: Number,
  imageUrl: String,
  creatorId: mongoose.Types.ObjectId,
});

const courseModel = new mongoose.model("Users", courseSchema);

module.exports = {
  courseModel,
};
