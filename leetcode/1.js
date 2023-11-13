"use strict"; // 启用严格模式

if (true) {
  var expressionScope = function() {
    console.log("Function Expression Scope");
  };
}

// 以下代码将会报错
expressionScope(); // ReferenceError: expressionScope is not defined