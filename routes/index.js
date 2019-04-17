const router = require('koa-router')()
const title = '首页'
const userBll = require('./../pub/bll/userinfo.js')

// router.prefix('/index')
router.get('/index.html', async (ctx, next) => {  
  //判断登录
  if(!ctx.session || !ctx.session.id){
    await ctx.redirect('/login.html')  
  }else{    
    const id = ctx.session.id;
    await ctx.render('index.html', { title, id })
  }  
})
router.get('/getuserid', async (ctx, next) => {
  
  let result = await userBll.index(ctx);
  ctx.body = JSON.stringify(result);
   
})
module.exports = router