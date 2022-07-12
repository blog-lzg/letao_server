const router = require('koa-router')();
const { gridlistController,sportsController,bannersController } = require('../controller/home');


// 首页宫格
router.get('/gridlist', gridlistController);

// 首页运动专区
router.get('/sports', sportsController)

// 首页轮播图
router.get('/banners', bannersController)

module.exports = router;