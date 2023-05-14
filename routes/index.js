const express = require('express')
const router = express.Router()

const users = require('./modules/users')
const home = require('./modules/home')
const todos = require('./modules/todos')
const auth = require('./modules/auth')

router.use('/users', users)
router.use('/auth', auth)
router.use('/todos', todos)
router.use('/', home)









module.exports = router