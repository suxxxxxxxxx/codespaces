//栈
// let stack = [];//只能用push和pop
//队列
let queue = [];//只能用push和shift

queue.push('宫保鸡丁');
queue.push('水煮鱼');
queue.push('烤鸭');

while(queue.length){
    let top = queue.shift();
    console.log(top);
}
