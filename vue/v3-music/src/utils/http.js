import axios from 'axios'
//fetch xhr vue应用时候，复用，App而不是页面，统一管理
//所有的请求前面加上baseURL地址

axios.defaults.baseURL = 'http://localhost:3000/api'
axios.defaults.timeout = 10*1000;//超时时间
axios.defaults.maxContentLength = 5*1024*1024;//图片上传
const http = {
    get(url,params={}){
        //能 await
        return new Promise((resolve,reject)=>{
            //xhr,fetch
            //请求的抽象
            axios.get(url,{params}).then(res=>{
                resolve(res.data)
            }).catch(err=>{
                reject(err.data)
            })
        })
    }
}
export default http
