// 引用express 與 express 路由器
const express = require('express')
const router = express.Router()
const db = require('../../models')
const Todo = db.Todo


// 定義首頁路由
router.get('/', (req, res) => {
  const userId = req.user.id

  return Todo.findAll({
    raw: true,
    nest: true,
    where: { userId } 
  })
    .then((todos) => { return res.render('index', { todos: todos }) })
    .catch((error) => { return res.status(422).json(error) })
})

//匯出路由器
module.exports = router