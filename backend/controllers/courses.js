const all_courses = (req, res) => {
  res.send("in all-course");
};

const purchase_course = (req, res) => {
  res.send("IN purchse course endpoint");
};

module.exports = {
  all_courses,
  purchase_course,
};
