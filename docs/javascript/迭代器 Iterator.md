# 迭代器 Iterator

> 在 JavaScript 中，Array/Set/Map/String 都默认支持迭代器

## JavaScript 中的迭代协议

- Iteration protocol 由 Iterable protocol 和 Iterator protocol 组成

### Iterable protocol

- JS 常见的 Array/Set/Map/String 都实现了 Iterable 协议
- Iterable protocol 允许 JavaScript 对象自定义遍历行为

#### 如何成为一个 Iterable 的对象？

- 自身或者原型链上的对象 must implement the `@@iterator` method （使用 Symbol.iterator 进行访问）
- 对于 `@@iterator` method 要求
  - A zero-argument function that returns an object, conforming to the iterator protocol. (返回一个 Iterator)
  - has this binding to iterable object

### Iterator protocol

The iterator protocol defines a standard way to produce a sequence of values (either finite or infinite)

```js
class SimpleClass {
  constructor(data) {
    this.data = data;
  }

  [Symbol.iterator]() {
    // Use a new index for each iterator. This makes multiple
    // iterations over the iterable safe for non-trivial cases,
    // such as use of break or nested looping over the same iterable.
    let index = 0;

    return {
      next: () => {
        if (index < this.data.length) {
          return { value: this.data[index++], done: false };
        } else {
          return { done: true };
        }
      },
    };
  }
}

const simple = new SimpleClass([1, 2, 3, 4, 5]);

for (const val of simple) {
  console.log(val); // 1 2 3 4 5
}
```

## 参考

