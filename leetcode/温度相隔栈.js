let temperature = [73, 74, 75, 71, 69, 72, 76, 73];
var dailyTemperature = function(temperature) {
    const len = temperatures.length;
    const stack = [];
    const res = new Array(len).fill(0);
    for (let i = 0; i < len; i++) {
        //存在打破递减趋势的温度
        while(stack.length&&temperature[i]>temperature[stack[stack.length-1]]){
            const top = stack.pop();
            res[top] = i-top;
        }
        stack.push(i);       
    }
    return res;
}