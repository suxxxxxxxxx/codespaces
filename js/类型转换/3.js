//一元运算符
// +'1'//1

// +[]//0

// +{}//NaN

// +[1,2,3]//NaN

//+({})//NaN

//+
//二元运算符
1 + '1'//'11'

1+null//1
console.log( [] + [])//空字符串
console.log([]+{})//[object Object]
console.log(({})+({}))//[object Object][object Object]
