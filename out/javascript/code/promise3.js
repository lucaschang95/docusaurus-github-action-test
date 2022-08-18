var PENDING = "pending";
var FULFILLED = "fulfilled";
var REJECTED = "rejected";
var MyPromise = /** @class */ (function () {
    function MyPromise(executor) {
        var _this = this;
        this.resolve = function (value) {
            console.log(_this);
            if (_this.status === PENDING) {
                _this.status = FULFILLED;
                _this.value = value;
            }
        };
        this.reject = function (reason) {
            if (_this.status === PENDING) {
                _this.status = REJECTED;
                _this.reason = reason;
            }
        };
        this.status = PENDING;
        this.value = null;
        executor(this.resolve, this.reject);
    }
    MyPromise.prototype.then = function (onFulfilled, onRejected) {
        // 判断状态
        if (this.status === FULFILLED) {
            // 调用成功回调，并且把值返回
            onFulfilled(this.value);
        }
        else if (this.status === REJECTED) {
            // 调用失败回调，并且把原因返回
            onRejected(this.reason);
        }
    };
    return MyPromise;
}());
//# sourceMappingURL=promise3.js.map