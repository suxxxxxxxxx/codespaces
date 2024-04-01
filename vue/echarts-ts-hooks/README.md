# 全新项目技术栈

- ts
- echarts 百度开源的 2D 数据可视化
- hooks

  - 函数式编程, use 开头
  - 将状态，生命周期等封装到函数中，提升了项目的复用
    到处都是 hooks useStore useRouter useRoute defineStore(useTodoList)
  - vueuse 第三方的 hooks
    useLocalization useMemory ...
  - 自定义 hook
    自定了 useResize、useLocalStorage 等 hook 函数，提升状态/生命周期在函数中的复用
    - 如果不封装， onMounted onUnmounted 生命周期函数挺复杂的，都在重复- 定时器，事件处理器等 在组件卸载后，要移除，不然会带来内存泄露

- 项目亮点
  - 介绍项目架构
    - utils js 功能函数复用 dry don't repeat yourself.
      直接拿到下个项目中去 防抖节流，格式化数据（92.118）,
    - 公用 css 文件放入到 assets/css/
      大型项目的需要 index.css reset.css variable.css
    - hooks
      有状态函数， 将组件的状态逻辑也可以复用，加速 UI 组件化
      loading.... useRequest vueuse
      request
      显示组件
  - 适配 - rem - em vw - onDomContentLoaded 设置 html fontSize
    设计稿 px 蓝湖 - 1920 移动端试配， 大屏试配
- css variables
