#百度考点

-前端考点
    -JS语法
        小黄书
    -   HTML5
        LocalStorage前端持久化存储
        浏览器的能力提升
        BOM
    -DOM BOM
    -css3/less/tailwindcss
    -VUE/REACT
    -Weboack 前端 工程化
    -node 大前段 后端的
    -ES6+

-localStorage
    html5 提供的持久化存储能力
    localStorage.getItem(Key)
    localStorage.setItem(KEY,value)
    移除 localStorage。removeItem(Key)

-HTML5表单能力
    -提升用户体验
        如果用户在提交表单时，受挫，小白
        required
        placeholder=""
-JSON.PARSE + JSON.stringify
    localStorage不能存对象，tostring

-label + input + 事件冒泡 用户体验优化
    label for = input 扩大操作范围 ，特别是移动端
    时间监听只能在一个元素上，所以列表一定要做事件委托，
    用冒泡机制 只监听父元素上的事件

-populateList 封装 很牛逼
    Donnot repeat yourself
    const items = JSON.parse() ||[]