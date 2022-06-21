# 迭代器 Iterator

> 在 JavaScript 中，Array/Set/Map/String 都默认支持迭代器

Specifically, an iterator is any object which implements the Iterator protocol by having a next() method that returns an object with two properties

## Iteration protocol

iteration protocol 由 iterable protocol 和 iterator protocol

### Iterable protocol

> allows JavaScript objects to define or customize their iteration behavior (允许 JavaScript 对象自定义遍历行为)

#### 如何成为一个 Iterable 的对象？

- 自身或者原型链上的对象 must implement the @@iterator method （使用 Symbol.iterator 进行访问）
- 对于 iterator method 要求
  - A zero-argument function that returns an object, conforming to the iterator protocol. (返回一个 Iterator)
  - has this binding to iterable object

### Iterator protocol