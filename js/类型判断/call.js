var obj ={
    a:1
}
function foo(x,y){
    console.log(this.a);
}
Function.prototype.myCall = function(context){
    if(typeof this !== 'function'){
        throw new TypeError('not function');
    }
    let args = Arrayfrom(arguments).slice(1);

    context.fn = this;
    let res = context.fn(args);//触发this隐式绑定规则
    delete context.fn;
    return res;
}
foo.myCall(obj,1,2); 