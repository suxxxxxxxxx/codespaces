class MyPromise {
  constructor(executor) {
    this.status = "pending"; // 初始状态
    this.value = undefined; //接受resolve的参数
    this.reason = undefined; //接受reject的参数
    this.onFulfilledCallbacks = []; //成功的回调
    this.onRejectedCallbacks = []; //失败的回调
    const resolve = (value) => {
      if (this.status === "pending") {
        this.status = "fulfilled";
        this.value = value;
        //把then的回调函数触发掉
        this.onFulfilledCallbacks.forEach((cb) => cb(this.value));
      }
    };
    const reject = (reason) => {
      if (this.status === "pending") {
        this.status = "rejected";
        this.reason = reason;
        this.onRejectedCallbacks.forEach((cb) => cb(this.reason));
      }
    };
    executor(resolve, reject);
  }
  then(onFulfilled, onRejected) {
    //把onFulfilled 存起来，供resolve调用
    if (this.status === "fulfilled") {
      onFulfilled(this.value);
    }
    if (this.status === "rejected") {
      onRejected(this.reason);
    }
  }
}
new MyPromise(() => {});
