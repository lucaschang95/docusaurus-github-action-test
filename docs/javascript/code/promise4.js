function resolvePromise(promise2, x, resolve, reject) {
    // ...
}

function Promise(executor) {
    // 状态描述 pending resolved rejected
    this.state = "pending";
    // 成功结果
    this.value = undefined;
    // 失败原因
    this.reason = undefined;
    // 保存成功回调
    this.onResolvedCallbacks = [];
    // 保存失败回调
    this.onRejectedCallbacks = [];

    // 让其处理器函数立即执行
    try {
        executor(resolve.bind(this), reject.bind(this));
    } catch (err) {
        reject(err);
    }

    function resolve(value) {
        if (this.state === "pending") {
            this.value = value;
            this.state = "resolved";
            this.onResolvedCallbacks.forEach((cb) => cb(value));
        }
    }

    function reject(reason) {
        if (this.state === "pending") {
            this.reason = reason;
            this.state = "rejected";
            this.onRejectedCallbacks.forEach((cb) => cb(reason));
        }
    }
}

Promise.prototype.then = function (onFulfilled, onRejected) {
    onFulfilled =
        typeof onFulfilled === "function" ? onFulfilled : (value) => value;
    onRejected =
        typeof onRejected === "function"
            ? onRejected
            : (err) => {
                  throw err;
              };

    let promise2 = new Promise((resolve, reject) => {
        if (this.state === "pending") {
            this.onResolvedCallbacks.push(() => {
                try {
                    let x = onFulfilled(this.value);
                    resolve(x);
                } catch (e) {
                    reject(e);
                }
            });
            this.onRejectedCallbacks.push(() => {
                try {
                    let x = onRejected(this.value);
                    resolve(x);
                } catch (e) {
                    reject(e);
                }
            });
        }

        if (this.state === "resolved") {
            try {
                // 拿到返回值resolve出去
                let x = onFulfilled(this.value);
                resolve(x);
            } catch (e) {
                // catch捕获异常reject抛出
                reject(e);
            }
        }
        if (this.state === "rejected") {
            try {
                let x = onRejected(this.reason);
                resolve(x);
            } catch (e) {
                // catch捕获异常reject抛出
                reject(e);
            }
        }
    });
    return promise2;
};

const p = new Promise((resolve, reject) => {
    resolve(1);
    reject(2);
});
