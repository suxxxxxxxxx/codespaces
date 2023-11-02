//对象的创建
// 1.var obj = {}//对象字面量|对象直接量

// 2.var obj = new Object()//通过Object构造函数创建对象

// 3.自定义构造	函数

//4.Object.create({})方法

// 构造函数就像工厂，可以批量化生产对象
function Car( color){
    this.name = 'BMW'
    this.height = '1400'
    this.lang = '4900'
    this.weight = 1000
    this.health = 100
    this.color = color
}

let car1 = new Car('pink') //实例化
let car2 = new Car('green')
car1.name = '玛莎拉蒂'
console.log(car2);