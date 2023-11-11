// let str = 'abcdefg'
// console.log(str[2]);
// console.log(str.at(2));
// console.log(str.startsWith('ab'));
// console.log();
let obj = {
    a:1,
    b:2
}
let str  =JSON.stringify(obj);
let obj2 = JSON.parse(str);
console.log(obj);
console.log(JSON.stringify(obj));
console.log(obj2);