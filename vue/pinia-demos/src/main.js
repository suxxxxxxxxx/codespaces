import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// import router from './router'
import { createPinia } from 'pinia'

const app = createApp(App)

app
  // .use(router) // SPA
  .use(createPinia()) // 统一管理数据 会计
  .mount('#app') // UI组件
