//与电脑石头剪刀布
let playerAction = process.argv[process.argv.length - 1];
//电脑生成一个
let arr = ['rock', 'scissor', 'paper'];
let random = Math.floor(Math.random() * 3);
let computerAction = arr[random];
//比较
if (playerAction == computerAction) {
    console.log('平局');
} else if (
    (playerAction == 'rock' && computerAction == 'scissor') ||
    (playerAction == 'scissor' && computerAction == 'paper') ||
    (playerAction == 'paper' && computerAction == 'rock')
) {
    console.log('你赢了');
} else {
    console.log('你输了');
}