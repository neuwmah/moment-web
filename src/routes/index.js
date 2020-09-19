const express = require("express")
const router = express.Router()
const ChangeController = require("../controllers/ChangeController")
const NewController = require("../controllers/NewController")

//routes
router.get('/', NewController.listNews)

module.exports = router