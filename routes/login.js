const router = require('koa-router')()
const userBll = require('./../pub/bll/userinfo.js')
const title = '登录'

// router.prefix('/login')

router.get('/login.html', async (ctx, next) => {
  await ctx.render('login.html', { title })
})

router.post('/login', async (ctx, next) => {
    let result = await userBll.login(ctx);
    ctx.body = result;
    
})

module.exports = router