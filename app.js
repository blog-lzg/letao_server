const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const dotenv = require('dotenv')
const {secret} = require('./config/index');
var jwt = require('koa-jwt');

// 启动dotenv
dotenv.config();

const home = require('./routes/home')
const category = require('./routes/category')
const user = require('./routes/user')
const sms = require('./routes/sms')


// error handler
onerror(app)

// 使用中间件校验token
app.use(function(ctx, next){
  return next().catch((err) => {
    if (401 == err.status) {
      ctx.status = 401;
      ctx.body = 'Token校验失败,请在请求头中写入token\n';
    } else {
      throw err;
    }
  });
});

// unless 排除哪些接口不需要token校验
app.use(jwt({ secret}).unless({ path: [/^\/public/, /^\/rigister/,/^\/login/] }));




// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

app.use(home.routes(), home.allowedMethods())
app.use(category.routes(), category.allowedMethods())
app.use(user.routes(), user.allowedMethods())
app.use(sms.routes(), sms.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
