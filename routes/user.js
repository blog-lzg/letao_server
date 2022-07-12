const router = require('koa-router')();

const {registerController} = require('../controller/user');


// 注册接口
router.post('/register', registerController)


module.exports = router;