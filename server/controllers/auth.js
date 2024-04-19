const { json } = require("body-parser")
const Auth = require("../models/auth")

const register = async(req,res) =>{
  const { email, password, username } = req.body;


    if(!username || !email || !password){
     return res.status(400),json({
      sucess: false,
        mes: "Missing input "
      })
    }
    ///
    const newUser = await Auth.create(req.body)
    return res.status(200).json({
      sucess: newUser ? true : false,
      mes: newUser ? "Register is successfully. Please go login" : "Something went wrong"
    })
}

module.exports = {
  register
}