const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

class MyPromise {
    constructor(executor: Function) {
        this.status = PENDING;
        this.value = null;
        executor(this.resolve, this.reject);
    }

    status: string;
    value: unknown;
    reason: unknown;

    resolve = (value: unknown) => {
        console.log(this);
        if (this.status === PENDING) {
            this.status = FULFILLED;
            this.value = value;
        }
    };

    reject = (reason: unknown) => {
        if (this.status === PENDING) {
            this.status = REJECTED;
            this.reason = reason;
        }
    };

    then(onFulfilled, onRejected) {
        // 判断状态
        if (this.status === FULFILLED) {
            // 调用成功回调，并且把值返回
            onFulfilled(this.value);
        } else if (this.status === REJECTED) {
            // 调用失败回调，并且把原因返回
            onRejected(this.reason);
        }
    }
}
