const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router.post('/', userController.createUser)
router.get('/', userController.getAllUsers)
router.get('/:username', userController.getOneUser)
router.patch('/:id', userController.editUser)

module.exports = router