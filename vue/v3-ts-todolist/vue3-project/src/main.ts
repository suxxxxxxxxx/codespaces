import './assets/main.css'
// import 'vant/lib/index.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import { Button, Icon, NavBar, Field } from 'vant'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
// app.use(Button)
// app.use(Icon)
// app.use(NavBar)
// app.use(Field)

app.mount('#app')
