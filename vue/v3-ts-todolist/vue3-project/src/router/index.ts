import { createRouter, createWebHistory } from 'vue-router'
import ListView from '../views/ListView.vue'
import AddNoteView from '../views/AddNoteView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'List',
      component: ListView
    },
    {
      path: '/addNote',
      name: 'addNote',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AddNoteView
    }
  ]
})

export default router
