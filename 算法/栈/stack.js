let stack =[]//只能用数组的push和pop方法

//入栈
stack.push('东北大板')
stack.push('巧乐兹')
stack.push('冰红茶')
stack.push('可乐')
stack.push('雪碧')

///出栈
while(stack.length>0){
    let top = stack[stack.length-1]
    console.log("我正在吃",top)
    stack.pop()
}