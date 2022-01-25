const express = require("express")
const welcome = require("../../controller/welcome")
const router = express.Router()
router.get('/', welcome)
module.exports = router