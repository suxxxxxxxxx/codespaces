#typescript 让工资+10%
-让前端像写java一样写大项目 代码一万行+
-vue/react + typescript
-es6
   弱类型还是没有，缺点容易出问题
   let banners：[int] = [1,2,3]
-typescript 是js的超级
-给项目引入前端模型层
   -路由已经不是后端的，前端也可以有
   -前端也可以有自己的模型，mvvm

-UI组件和数据管理的分离
   -store/components|views
   -pinia defineStore('todos',() =>{
      return {
         state,
         ...actions
      }
   }) useTodosStore
   -vue ref
   -这里是唯一请求axios接口的地方
   -app.use(createPinaia())
   -引入这个模块，执行useTodosStore方法
const { todos } = toRefs(useTodosStore())
const { getTodos } = useTodosStore()
   
-vue 项目开发设计模式
   -越复杂的，只要是流程，其实很简单
   -UI组件 + 数据管理
   -数据的流向，
      backend -> api -> store -> component
   -SPA
      router -> views ->components
   -APP = VUE + VUERouter + pinia + ts
   -写UI组件
      ElementPlus(熟) + views + components(common|components)
      Tailwindcss(熟) + 组件设计艺术

   -App.vue 一个个组件慢慢搭
      <>defineProps
      -不要用ts