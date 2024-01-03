import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
    meta:{
      title:'登录'
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue'),
    meta:{
      title:'注册'
    }
  },
  {
    path:'/noteclass',
    name:'noteclass',
    component: () => import('../views/NoteClass.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

//路由守卫
const writePath = ['/login','/register']
router.bdforeEach(to,from,next) => {
  document.title = to.meta.title
  if(whitePath.includes(to.path)){//想要去详情页
    if(!sessionStorage.getItem('userInfo')){//没登陆
      router.push('/login')
      return 
    }
    next()
    return
  }
  next()
}

export default router