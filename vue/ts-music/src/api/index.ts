// 没有使用。也会警告
import type { Banner } from "../models/banner";
import http from './http.ts';
// ts 有完整的编译阶段 ts -> js -> 打包 -> 浏览器
// 后端api业务代码
export async function useBanner(){
    // 前端也有数据校验了,要说不,为用户负责 ts 接口
    // http.get<>泛型 返回的类型是Banner数组
    //resolve(res.data) res.data是Banner数组
    const { banners } = await http.get<{banners: Banner[]}>('/banner',{type:1})
    return banners;
}