const { create,getPost,deletepost} = require("../controllers/post")
const {veryfyUser} = require("../utils/veryfyUser")


const router = require("express").Router()


router.post('/create', veryfyUser, create)
router.get('/getpost', getPost)
router.delete('/deletepost/:postId/:userId', veryfyUser, deletepost)
module.exports = router