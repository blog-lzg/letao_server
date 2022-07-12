const router = require('koa-router')();

const {registerController,loginController} = require('../controller/user');


// 注册接口
router.post('/register', registerController)
router.post('/login', loginController)


module.exports = router;