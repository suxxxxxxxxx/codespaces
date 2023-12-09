# vue 网易云音乐

-界面
    npm init vite 开发脚手架
-后台
    netsea
    :3000
-前后端分离的全栈开发
-npm 换源
    npm config set registry https://registry.npmmirror.com  
-npm i -D 开发阶段 devDependencedemcies
-tailwindcss 60%css开发 原子化css开发
    -npm i -D tailwindcss postcss autoprefixer
    npx  tailwindcss init -p 初始化
        npx执行安装或未安装的包
    -声明开发目录下所有层级中，.vue等格式文件支持tailwindcss
    -tailwind.css
    可以使用tailwind类名
-切页面
-组件化思维
    -根组件App.vue
    -layout组件
        -Menu
        -Header
        
-vite.config.js是vite工程化的配置文件
    -alias 短路径
        @ ->./src回城

-企业级vue开发框架element-plus PC版
    好多组件拿来就用
    vue是渐进式MVVM开发框架 开发模式
    element-plus 组件库 找到我们想要的组件

-vite写了一段让element plus自动引入的代码

-通用组件
    /components/common/
    不属于特定的组件，极高的复用性 在多个项目中可以复用
-图标字体库
    -要用到哪些图标？
        import {} from '@icon-park/vue-next'