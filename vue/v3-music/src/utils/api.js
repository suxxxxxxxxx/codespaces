import http from '@/utils/http'
import { HttpProxy } from 'vite'
// 模块,前后端交流 数据模块封装
// localhost:3000/api/bannaer//轮播图 axios

export async function getBanner() {
    //get 统一 http
    const { data } = await HttpProxy.get('/bannaer',{type:1})
    return banners
}

export async function getSerachSuggest(keywords) {
    const { result } = await http.get('/search',{keywords})
    return result
}