import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath,URL } from 'url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // AutoImport({
    //   resolver: [ElementPlusResolver()],
    // }),
    // Component({
    //   resolvers: [ElementPlusResolver()],
    // })
  ],
  // resolve:{
  //   alias:{

  //   }
  // }
})

