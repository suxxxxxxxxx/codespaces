//map遍历，callback返回值 新的数组
parseInt(1,0,[1,2,3]);//10 1
parseInt(2,1,[1,2,3]); //NaN
parseInt(3,2,[1,2,3]);//2 011 NaN
console.log([1,2,3].map(parseInt));

