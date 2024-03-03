js 为什么要有异步？
因为 js 是单线程的编程语言，同一时间执行执行一个任务

js 为什么不设计成多线程？
节约内存
没有锁，解锁的过程，节约上下文切换的时间
请你聊一聊异步的发展史
是什么 js 中从最早的一步处理方式到现在的最新的异步处理方式

发展史

回调函数: 代码维护困难（回调地狱）

promise：

维护了一个状态，state,值为：pending fulfilled rejected,目的是让 promise 的状态一经改变，无法再次修改，也就保证了 then 和 catch 不可能同时触发

内部的 resolve 函数会修改 state 为 fulfilled，并触发 then 中的回调

then: 1. 默认返回一个 peromise 对象，状态为 fulfilled 2. 当 then 前面的 promise 状态为 fulfilled，then 中的回调直接执行， 当 then 前面的 promise 状态为 rejected，then 中的第二个回调直接执行， 当 then 前面的 promise 状态为 pending，then 中的回调需要被缓存起来交给 resolve 或者 reject 执行

Generator

可以分段执行，可以暂停

可以控制每个阶段的返回值

可以知道是否执行完毕

可以借助 Thunk 和 co 模块 处理异步，但是写法复杂，所以 generator 函数的意义其实是为了打造 async await
