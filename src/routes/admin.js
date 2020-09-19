const express = require("express")
const router = express.Router()
const NewController = require("../controllers/NewController")
const UserController = require("../controllers/UserController")

//new
router.get('/novidades', NewController.listNews)
router.post('/novidades/criar', NewController.createNew)
router.delete('/novidades/deletar/:new_id', NewController.deleteNew)
router.put('/novidades/editar', NewController.editNew)

//user
router.get('/usuarios', UserController.listUsers)
router.post('/usuarios/criar', UserController.createUser)
router.delete('/usuarios/deletar/:user_id', UserController.deleteUser)
router.put('/usuarios/editar', UserController.editUser)

module.exports = router