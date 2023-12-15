#手写封装ajax功能，只考虑get url ，思考 同步变异步 

-promise
    ajax是异步，放到promise里面？async await
    1.Promise实例化，经历以下流程
        -new该做的 p 初始状态 state = 'pending'
        -constructor executor 执行
        都是同步的
        -executor是异步任务的容器
            executor同步，setTimeout/ajax/...异步的->EvenLoop
            resolve()时 p.state = fulfilled
        -流程怎么办
            -then微任务 执行的机会是在p.state pending-> EventLoop
            -await比then更简洁