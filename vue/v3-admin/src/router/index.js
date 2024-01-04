//后台系统 History html5.pushState 公司内部使用 chrome
// 用户段 移动项目没这个问题 PC端，政府，企业
import { createRouter, createWebHistory } from 'vue-router'
import { usePermissStore } from '../store/permiss.js'
import Home from '../views/Home.vue'//直接引入

// const data = usePermissStore()//hooks
// console.log(data)
//路由的配置 后台管理系统
// 设置数组
// admin[1,2,3]
// user[1]
// useRoute meta.permiss 你要访问的页面的权限 includes true
const routes = [
    {
        path:'/',
        redirect:'/dashboard',//重定向,30x
    },
    {
        path:'/',
        name:'Home',//路由的名字
        component:Home,//Layout
        children:[
            {
                path:'/dashboard',
                name:'dashboard',
                meta:{
                    title:'系统首页',//路由守卫
                    permiss:'1'//哪些页面可以看
                },
                component:()=>import('../views/Dashboard.vue')
            },
            {
                path:'/table',
                name:'baseboard',
                meta:{
                    title:'表格',//路由守卫
                    permiss:'2'//哪些页面可以看
                },
                //动态挂载路由 异步
                component:()=>import('../views/Table.vue')
            }

        ]

    },
    {
        path:'/403',
        name:'403',
        meta:{
            title:'403'
        },
        component:()=>import('../views/403.vue')
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

router.beforeEach((to,from,next)=>{
    document.title = `${to.meta.title} | 后台管理系统`
    //登录后的用户角色
    // const role = localStorage.getItem('ms_username')
    const role = 'admin';
    const permiss = usePermissStore()
    // console.log(permiss)
    if(!role && to.path !== '/login'){
        next('/login')
    }else if (to.meta.permiss &&
        !permiss.roleList[role].includes(to.meta.permiss)) {
        next('/403')
    }
    else{
        next()
    }
})

export default router