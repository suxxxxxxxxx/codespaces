// console.log(this);

// var a = 10;
// console.log(window.a); 
function identify() {
    return this.name.toUpperCase();
}
function speek() {
    var greeting = "Hello, I'm " + identify.call(this);
    console.log(greeting);
}
var me ={
    name: "Kyle"
};
var you = { 
    name: "Reader"
}
// console.log(identify(you));
speek.call(me);
