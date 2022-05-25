# alt

> alt 组合子能够在提供函数相应的默认行为时执行简单的条件逻辑判断

如果一个返回值的真值, 则返回第一个值, 否则返回第二个值

```js
const alt = curry((fn1, fn2, value) => fn1(value) || fn2(value));
```
