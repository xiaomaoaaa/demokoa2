const router = require('koa-router')()
const userBll = require('../pub/bll/userinfo.js')
const title = '注册'

// router.prefix('/test')

router.get('/test.html', async (ctx, next) => {
  await ctx.render('test.html', { title })
})

router.post('/', async (ctx, next) => {

  let result = await userBll.register(ctx)

  ctx.body = result;

})

module.exports = router