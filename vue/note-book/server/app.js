const koa = require('koa')
const app = new koa()
const bodyParser = require('koa-bodyparser')//让koa能解析post参数
const cors = require('koa2-cors')//解决跨域问题

const user = require('./routes/user.js')

app.use(bodyParser())

// //主要逻辑
// const main = () =>{

// }

app.use(cors())//告诉浏览器，允许跨域
app.use(user.routes(),user.allowedMethods())

app.listen(3000,() => {
    console.log('项目已经启动')
})
