function outerFunction() {
    var outerVar = "我在外部函数中";
    
    function innerFunction() {
      var innerVar = "我在内部函数中";
      console.log(outerVar); // 在内部函数中访问外部函数的变量
    }
  
    innerFunction();
    // console.log(innerVar); // 尝试在外部函数中访问内部函数的变量，这会导致错误
  }
  
  outerFunction();
  