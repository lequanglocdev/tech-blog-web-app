const {updateUser} = require("../controllers/user")
const {veryfyUser} = require("../utils/veryfyUser")
const router = require("express").Router()

router.put("/update/:userId",veryfyUser,updateUser)


module.exports = router