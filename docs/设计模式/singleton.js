// 单例模式的思想在于保证一个特定类仅有一个实例
// 这意味着当您使用同一个类创建新对象的时候，应该得到与第一次所创建对象完全相同的对象
// 增加函数的实例属性，修改构造函数，闭包，立即执行函数

function Universe() {
    if (typeof Universe.instance === 'object') {
        return Universe.instance;
    }

    // 正常进行
    this.startTime = 0;
    this.bang = 'big';

    Universe.instance = this;

    return this;
}

function Universe1() {
    let instance = this;

    this.startTime = 0;
    this.bang = 'Big';

    Universe = function () {
        return instance;
    }
}

Universe.prototype.nothing = true;
console.log(Universe.prototype);
let uni = new Universe();
console.log(Universe.prototype);
Universe.prototype.everything = true;
console.log(Universe.prototype);
let uni2 = new Universe();
console.log(Universe.prototype);

