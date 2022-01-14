// compose函数只能组合仅接受一个参数的函数
// 可以使用partial将多参数函数变为单参数函数
const compose = (a, b) => (c) =>
    a(b(c));

let splitIntoSpaces = (str) => str.split(' ');
let count = (array) => array.length;

const countWords = compose(count, splitIntoSpaces);
console.log(countWords('hello world!'));