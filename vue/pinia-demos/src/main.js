import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router' // Add the import statement for 'router' module
import { createPinia } from 'pinia'

createApp(App)
    .use(router) // Uncomment the 'router' usage
    .use(createPinia())
    .mount('#app')
