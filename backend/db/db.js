const mongoose = require("mongoose");

const dbconnect = async (URL) => {
  await mongoose.connect(URL);
  console.log("COnnected to DATABASE.....");
};

module.exports = dbconnect;
