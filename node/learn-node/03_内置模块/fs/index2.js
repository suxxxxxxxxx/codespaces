const fs = require('fs');

// fs.writeFileSync('./target.md', '举头望明月');

const img = fs.readFileSync('./avatar.png');

fs.writeFileSync('./pic/avator2.png', img);

console.log(img);