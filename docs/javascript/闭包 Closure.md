# 闭包 (Closure)

> 当外部函数返回一个内部函数时, 可以通过内部函数访问到外部函数中的变量和方法

原理：execution context中保存了函数的执行上下文，比如：scope chain等。因此可以访问到外部函数中的变量和方法(identifier)。

- 通过`[[scope]]`属性获取到scope chain，从而实现闭包

一个函数运行完之后, 由于其他地方还有对于他exxcution context的引用, 它并未销毁, 就形成了闭包.

## 作用

### 模拟私有变量

```js
var c = (function test(value) {
    const privateVar = '6';
    function getPrivateVar() {
        return privateVar;
    }
    return getPrivateVar;
})(5)

console.log(c());
```

### 异步服务端调用

### 创建人工块作用域变量
