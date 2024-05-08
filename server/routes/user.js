const {updateUser,deleteUser,getUsers} = require("../controllers/user")
const {veryfyUser} = require("../utils/veryfyUser")
const router = require("express").Router()

router.put("/update/:userId",veryfyUser,updateUser)
router.delete('/delete/:userId', veryfyUser, deleteUser);
router.get('/getusers', veryfyUser, getUsers);

module.exports = router