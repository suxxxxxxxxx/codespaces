function foo(){
    var myName = "极客邦";
    let test1 = 1;
    let test2 = 2;
    var innerBar = {
        getName:function(){
            console.log(test1);
            return myName;
        },
        setName:function(newName){
            myName = newName;
        }
    }
    return innerBar;
}
var bar = foo();
bar.setName("极客时间");
console.log(bar.getName());