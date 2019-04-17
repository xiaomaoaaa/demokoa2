const router = require('koa-router')()
const userBll = require('./../pub/bll/userinfo.js')
const title = '注册'

// router.prefix('/reg')

router.get('/reg.html', async (ctx, next) => {
  await ctx.render('reg.html', { title })
})

router.post('/reg', async (ctx, next) => {

  let result = await userBll.register(ctx)

  ctx.body = result;

})

module.exports = router