// compose函数只能组合仅接受一个参数的函数
// 可以使用partial将多参数函数变为单参数函数
// const compose = (a, b) => (c) => a(b(c));

// let splitIntoSpaces = (str) => str.split(" ");
// let count = (array) => array.length;

// const countWords = compose(count, splitIntoSpaces);
// console.log(countWords("hello world!"));

function compose() {
    for (
        var _len = arguments.length, funcs = new Array(_len), _key = 0;
        _key < _len;
        _key++
    ) {
        funcs[_key] = arguments[_key];
    }

    if (funcs.length === 0) {
        return function (arg) {
            return arg;
        };
    }

    if (funcs.length === 1) {
        return funcs[0];
    }

    return funcs.reduce(function (accu, curr) {
        return function () {
            return accu(curr.apply(void 0, arguments));
        };
    });
}

function a(str) {
    console.log("a");
    return str + "a";
}

function b(str) {
    console.log("b");
    return str + "b";
}

function c(str) {
    console.log("c");
    return str + "c";
}

const res = compose(a, b, c);

const str = res("x");

console.log(str);
