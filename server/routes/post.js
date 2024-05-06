const { create,getPost} = require("../controllers/post")
const {veryfyUser} = require("../utils/veryfyUser")


const router = require("express").Router()


router.post('/create', veryfyUser, create)
router.post('/getpost', getPost)

module.exports = router