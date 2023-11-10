// function foo(){}
var a = 2;
// var bar = function foo{
//     console.log(this.a);
// }
// bar()
// var baz = () => {
//     console.log(this.a);
// }
// baz()
var obj = {
    name: 'TOM',
    show: function(){
        console.log(this.name);
        var bar = () => {
            console.log(this.name);
        }
        bar()
    }
}
obj.show()