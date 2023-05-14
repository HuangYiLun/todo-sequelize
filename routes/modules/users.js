const express = require('express')
const router = express.Router()
const db = require('../../models')
const User = db.User
const Todo = db.Todo
//認證系統路由
//登入頁面
router.get('/login', (req, res) => {
  res.render('login')

})
//登入功能
router.post('/login', (req, res) => {
  res.send('login')

})

//註冊頁面
router.get('/register', (req, res) => {
  res.render('register')

})
//註冊功能
router.post('/register', (req, res) => {
  const { name, email, password, confirmPassword } = req.body
  User.create({ name, email, password })
    .then(user => res.redirect('/'))
})

module.exports = router