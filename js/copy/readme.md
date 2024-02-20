#拷贝
通常只针对于引用类型


#浅拷贝
-常见的浅拷贝方法
1.Object.create(x)
2.Object.assign({}, x)
3.concat
4.slice
5.数组解构
6.arr.toReversed().reverse()//不完全是浅拷贝

#深拷贝
-常见的深拷贝方法：
JSON.parse(JSON.stringify(obj))

-缺点
1.无法拷贝 undefinded,function,Symbol,bigint这几种类型的数据
2.无法处理循环引用
