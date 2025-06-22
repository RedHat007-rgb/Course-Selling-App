const purchaseSchema = new schema({
  userId: mongoose.Types.ObjectId,
  courseId: mongoose.Types.ObjectId,
});

const purchaseModel = new mongoose.model("Users", purchaseSchema);

module.exports = {
  purchaseModel,
};
