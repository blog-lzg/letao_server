const router = require('koa-router')();
const {smsController} = require('../controller/sms')

// 发送短信
router.post('/sendmsm', smsController)

module.exports = router;