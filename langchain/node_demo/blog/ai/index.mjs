// js 早期的js是没有模块化的概念 文件的加载顺序手动
// <script src="./a.js"></script>
// <script src="./b.js"></script>
// <script src="./c.js"></script>
// node commonjs
//     js?语言 -> 编译成二进制 v8引擎 chrominum 内核 不包含浏然器UI
//     node c++ 封装了choriminum js运行时 commonjs require module.exports
//     后端天生复杂
//     前端应用随着VUE/REACT的出现变得越来越复杂 ESModule出来了
//     node 用commonjs 前端用ESModules吗？node也支持 ESModule
//     mjs？node安装的新版本，可能直接支持ESModule，如果老一点的版本
//     用mjs后缀来声明
