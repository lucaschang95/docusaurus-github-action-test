# Modularity 模块化

出现原因

- 顶层作用域，变量污染
- 文件依赖问题

- 一个复杂程序, 依照一定规则, 封装成几个块(文件), 并组合在一起.
- 每个块向外部暴露一些接口(方法), 用于模块之间的通信

- 可维护性
- 命名空间
- 可复用性



## IIFE (Immediately Invoked Function Expression)

```javascript
let result = (function () {
    return xxx;
})();
​```
- design pattern 设计模式
- 原理是闭包(closure)
- grouping operator 防止访问内部变量
- invoked function expression立即调用该匿名函数
- 通过return的object来实现通信





#### 模块化的实现

- 原始: 匿名函数自调用
  - 返回一个对象, 对象中包含希望暴露的方法等 (闭包)
- ES6解决方案
- Common JS

## CommonJS, ESModule

CommonJS

- 运行时，可以动态加载
- 导出值是拷贝，可以修改导出值

ESModule

- 编译时，不可以动态加载
- 导出值是饮用，不可修改