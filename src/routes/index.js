const express = require("express")
const router = express.Router()
const ChangeController = require("../controllers/ChangeController")
const NewController = require("../controllers/NewController")

//routes
router.get('/', NewController.listNews)
//router.get('/changelog', ChangeController.listChanges)

module.exports = router