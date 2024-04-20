const { testUser } = require("../controllers/user");

const router = require("express").Router();

router.get('/test',testUser)

module.exports = router