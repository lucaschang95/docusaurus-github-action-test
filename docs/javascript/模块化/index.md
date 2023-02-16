# 模块系统

## 各个模块系统之间的区别

- cjs require 导入的是值的拷贝，esm import 导入的是值的引用

```js
// a.cjs
let age = 18;

exports.setAge = function setAge(val) {
  age = val;
};
exports.age = age;

// index.cjs
const { age, setAge } = require('./a.cjs');

console.log(age); // 18
setAge(19);
console.log(age); // 18

// a.mjs
export let age = 18;
export function setAge(val) {
  age = val;
}

// index.mjs
import { age, setAge } from './a.mjs';

console.log(age); // 18
setAge(19);
console.log(age); // 19
```

## 参考

- (<https://juejin.cn/post/7048276970768957477)[https://juejin.cn/post/7048276970768957477>]
