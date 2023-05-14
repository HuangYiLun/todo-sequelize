// 引用express 與 express 路由器
const express = require('express')
const router = express.Router()
const db = require('../../models')
const Todo = db.Todo


router.get('/new', (req, res) => {
  return Todo.findAll({
    raw: true,
    nest: true
  })
    .then((todos) => { return res.render('index', { todos: todos }) })
    .catch((error) => { return res.status(422).json(error) })
})

router.post('/', (req, res) => {

})

router.get('/:id', (req, res) => {

})

router.get('/:id/edit', (req, res) => {

})

router.put('/:id', (req, res) => {

})

router.delete('/:id', (req, res) => {

})

//匯出路由器
module.exports = router