const router = require('express').Router()
const userController = require('./controller/users.controller')






router.post('/api/users/register',userController.register)
router.post('/api/users/login',userController.login)
module.exports = router