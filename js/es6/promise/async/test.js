function foo(){
    let a = 1;
    return function baz(){
        return a;
    }
}

let fn = baz();