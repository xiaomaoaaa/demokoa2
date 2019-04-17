const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

const config = require('./pub/config/config.js');
const session = require('koa-session');
const RedisStore = require('koa2-session-redis');

const index = require('./routes/index')
const reg = require('./routes/reg')
const login = require('./routes/login')
const logout = require('./routes/logout')
const test = require('./routes/test')
// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'ejs',
  map: {html: 'ejs' }

}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

app.keys = ['Porschev'];
const redis_conf = {  
  key: 'Porschev',
  maxAge: config.REDIS.maxAge,
  overwrite: true,
  httpOnly: true,  
  rolling: false,
  sign: true,
  store: new RedisStore({
    host: config.REDIS.host,
    port: config.REDIS.port,    
    password: config.REDIS.password    
  })
};

app.use(session(redis_conf, app));

// routes
app.use(index.routes(), index.allowedMethods())
app.use(reg.routes(), reg.allowedMethods())
app.use(login.routes(), login.allowedMethods())
app.use(logout.routes(), logout.allowedMethods())
app.use(test.routes(), test.allowedMethods())
// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

app.listen(config.SERVER_PORT, () => {
  console.log(`Starting at port ${config.SERVER_PORT}!`)
});
// app.all("*",function(req,res,next){
//   res.header("Access-Control-Allow-Origin","*"); //允许所有访问者跨域请求
//   next();
// })
module.exports = app