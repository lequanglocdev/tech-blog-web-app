const User = require("../models/user");
const bcryptjs = require("bcryptjs");
const { errorHandler } = require("../utils/error");
const register = async (req, res,next) => {
  // console.log(req.body)
  const { username, email, password } = req.body;
  if ((!username || !email || !password )) {
    next(errorHandler(400,"All fields are required"))
  }

  const hashedPassword = bcryptjs.hashSync(password,10)
  const newUser = new User({
    username,
    email,
    password:hashedPassword
  });
  try {

    await newUser.save();
    res.status(200).json("register Successful ");
  } catch (error) {
    next(error)
  }
};

module.exports = {
  register,
};
