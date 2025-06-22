const admin_login = (req, res, next) => {
  console.log("in admin-login middleware");
  next();
};

module.exports = admin_login;
