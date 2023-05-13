// 引用express 與 express 路由器
const express = require('express')
const router = express.Router()


router.get('/new', (req, res) => {
  return res.render('new')
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