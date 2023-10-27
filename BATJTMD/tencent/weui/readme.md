#腾讯日
代码新手的编程素养和JS功底
-代码的可读性高于一切
 注释
-优化代码
    统一风格 看开发文档

1.JS面试题
    codewars
    刷题网站
    写一个函数，完成某项功能
    字符串拼接

2.es6语法

3.智商游戏
    换一种写法
    闯将进来 抗压

#WeUI button组件
从任务看到本质
- ul >li
- 按钮组件 WEUI 源码 写出来
    60%的界面是不需要做的，UI框架提供通用组件
    40%业务结合代码
    微信 2年
- 抽象  BEM 命名规范
    -共性
        button 共性 类名 .btn 基类 .weui-btn
        项目代号-组件名 大项目
    -差异
        .weui-btn_primary
        .weui-btn_danger
        .weui-btn_info
#企业级界面开发规则
-html css js 功能分离
-css 架构
    -reset.cs
        去除浏览器间的样式区别，无差别页面显示
        box-sizing 盒子大小的计算方式
        浏览器好多家 edge chrome 内核
        文档流 body开始
        盒子在页面上占了多少？
        公摊
        标准盒子模型 = content + padding + border + margin
        2种盒模型
        IE盒模型 = content(自动缩放)+ padding + border + margin
    -base.css 通用样式
-css命名套路
    -page
        __hd__bd__ft
    -btn panel cell
    -框架组件
-css + 兄弟选择器
google 图片格式
    base64 图片 小一点简单的 在css文件里
    jpg png jpeg wtt webp 比较大 请求的并发