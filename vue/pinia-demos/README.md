# vue3 全家桶 MVVM

- vue响应式组件开发
    -components
        -common
        -业务组件
    -views/
    -UI组件库 element-plus
-vue-router
    前端有了路由
    SPA 快 传统的http request+response
    页面不会白一下
    缺点：SEO(搜索引擎优化)
-vuex/pinia         财务
    前端可以管理数据
    -确保数据流的正确性
        数据在组件里叫什么？状态
    -将数据与组件剥离，UI组件更单纯

-vue 项目 数据 从后端到页面显示 经过的所有流程和关键环节
    todos
    mysql/mongondb
    sql
    Java/node 内存 MVC
    router
    res
    http GET：3000/todos
    axios http.js index.js getTodoList
    store actions ->mutations->state
    组件 views/ ->props 传给子组件(UI化)
    UI Component + State + Router = SPA
    UI Component + State = APP

-pinia?
    -更简单
        store/todo.js defineStore返回值命名 useTodoStore
        函数返回 state
        import{ useTodoStore} from './store/todo.js'
        const {todos} = useTodoStore()
    -更现代
        hooks编程 use开头
    -将数据和UI组件分离开来