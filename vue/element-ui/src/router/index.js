import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('@/views/Login.vue'),

  },
  {
    path: '/home/:user',
    name: 'home',
    component: () => import('@/views/Home.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
