const User = require("../models/user");
const bcryptjs = require("bcryptjs");
const { errorHandler } = require("../utils/error");
const jwt = require("jsonwebtoken")
const register = async (req, res, next) => {
  // console.log(req.body)
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    next(errorHandler(400, "All fields are required"));
  }

  // console.log(typeof password)
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });
  try {
    await newUser.save();
    res.status(200).json("register Successful ");
  } catch (error) {
    next(error);
  }
};
const login = async (req, res, next) => {
  // console.log(req.body)
  const { email, password } = req.body;
  if (!email || !password) {
    next(errorHandler(400, "All fields are required"));
  }
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      next(errorHandler(404, "User not found"));
    }
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
     return  next(errorHandler(404, "Invalid password"));
    }
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: pass, ...rest } = validUser._doc;
    res.status(200).cookie('access_token',token,{httpOnly:true}).json(rest)
    console.log(res.password)
  } catch (error) {
    next(error);
  }
};

module.exports = {
  register,
  login
};
