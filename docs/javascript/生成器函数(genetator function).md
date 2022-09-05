# 生成器函数 generator function

返回一个 Generator 对象

```js
function* logGenerator() {
  console.log(0);
  console.log(1, yield);
  console.log(2, yield);
  console.log(3, yield);
}

const gen = logGenerator();

// the first call of next executes from the start of the function
// until the first yield statement
gen.next();             // 0
gen.next('pretzel');    // 1 pretzel
gen.next('california'); // 2 california
gen.next('mayonnaise'); // 3 mayonnaise
```
