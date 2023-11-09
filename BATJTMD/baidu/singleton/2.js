//es6 class企业级开发，大型项目，学java
class SingleDog{
    //属于对象
    show(){
        console.log('我是一个单例对象');
    }
    //不要直接new
    //属于类的
    //static instance
    static getInstance(){
        // console.log('静态方法') 
        if (!SingleDog.instance) {
            SingleDog.instance = new SingleDog();
        }
        return SingleDog.instance;
    }  
}
//类的方法
s1 = SingleDog.getInstance()
s2 = SingleDog.getInstance()
console.log(s1 === s2); // true
//new 过程 不同内存  同一个房间
//s1 s2 里的值 是地址
//同一个地址 先生成地址 然后再new去判断一下，如果已经new过了，就不用再new了
//if else 
//单例模式