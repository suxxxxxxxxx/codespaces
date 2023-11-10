// 在全局作用域中声明一个全局变量
var globalVar = "我在全局作用域中";

// 在全局作用域之外访问全局变量
function accessGlobalVar() {
  console.log(globalVar);
}

accessGlobalVar(); // 输出: "我在全局作用域中"
