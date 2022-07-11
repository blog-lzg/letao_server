const router = require('koa-router')();
const { gridlistController } = require('../controller/home');

router.get('/gridlist', gridlistController);

module.exports = router;