//包装类
// var obj ={}
// console.log(obj.a);

// var num = 123
// num.abc = 'aaa'
// console.log(num.abc);

// var str ='abcd'
// console.log(str.length);
// var num = new Number(123)
// num.abc = 'hello'
// console.log(num.abc);
// console.log(num*2);//参与运算时会被识别成数字，不参与运算时会被识别成对象
//  var num = 4
//  num.len = 3

// var num = new Number(4)
// num.len = 3
// delete num.len

// new Number(4).len//隐式包装类
// console.log(num.len);

// var arr = [1,2,3,4,5]
// arr.length = 2
// console.log(arr);
// var str = 'abcd'
// str.length = 2
// new String('abcd').length delete
// console.log(str.length);
//面试题
var str = 'abc'
str += 1
var test = typeof(str)
if(test.length == 6){
    test.sign = 'typeOf的返回结果可能是String'
    // new String(test).sign = 'typeOf的返回结果肯定是String' 
}
console.log(test.sign);//new String(test).sign