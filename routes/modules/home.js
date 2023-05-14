// 引用express 與 express 路由器
const express = require('express')
const router = express.Router()


// 定義首頁路由
router.get('/', (req, res) => {
  res.render('index')
})

//匯出路由器
module.exports = router