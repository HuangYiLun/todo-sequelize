// 引用express 與 express 路由器
const express = require('express')
const router = express.Router()
const db = require('../../models')
const Todo = db.Todo


router.get('/new', (req, res) => {
  return res.render('new')
})

router.post('/', (req, res) => {


})

router.get('/:id', (req, res) => {
  const id = req.params.id
  return Todo.findByPk(id)
    .then(todo => res.render('detail', { todo: todo.toJSON() }))
    .catch(error => console.log(error))
})

router.get('/:id/edit', (req, res) => {

})

router.put('/:id', (req, res) => {

})

router.delete('/:id', (req, res) => {

})

//匯出路由器
module.exports = router