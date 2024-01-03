const koa = require('koa')
const app = new koa()
const bodyParser = require('koa-bodyparser')//让koa能解析post参数

const user = require('./routes/user.js')

app.use(bodyParser())

// //主要逻辑
// const main = () =>{

// }


app.use(user.routes(),user.allowedMethods())

app.listen(3000,() => {
    console.log('项目已经启动')
})
