const router = require('koa-router')();
const {categoryController,TwoCategoryController} = require('../controller/category');

// 一级分类
router.get('/category',categoryController)

// 二级分类
router.get('/twoCategory',TwoCategoryController)

module.exports = router;