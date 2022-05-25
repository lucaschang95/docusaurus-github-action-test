# Monad

> Monad 用于函数式地解决传统错误处理的问题

```js
class Monad {
  constructor(value) {
    this._value = value;
  }

  static of(a) {
    return new Monad(a);
  }

  map(fn) {
    return fn(this._value);
  }

  fmap(fn) {
    return Monad.of(fn(this._value));
  }

  join() {
    if (!(this._value instanceof Monad)) {
      return this._value;
    }
    return this._value.join();
  }
}