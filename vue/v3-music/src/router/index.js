// 完成路由配置 url = > component
import { createRouter, createWebHashHistory } from 'vue-router'
//PC兼容性
const routes = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            // App.vue 用来挂载的，不是用来写具体的
            redirect: {name: 'discover'},
            component: () => import('@/views/Root.vue'),
            children:[
                {
                    path: 'discover',
                    name: 'discover',
                    component: () => import('@/views/discover/Discover.vue')
                },
            ]
        }
    ]
})
export default routes