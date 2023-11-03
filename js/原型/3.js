Car.prototype.name = 'BMW';
Car.prototype.lang = 4900;
Car.prototype.height = 1400;

function Car(ower,color){
    // this.name = 'BMW';
    // this.lang = 4900;
    // this.height = 1400;
    this.ower = ower;
    this.color = color;
}
var car = new Car('肖总','red');
var car2 = new Car('苏总','black');

// Car.name = '红旗';
delete Car.prototype.name;
console.log(car);
console.log(car2.name);