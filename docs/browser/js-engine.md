# js引擎

- 浏览器是多进程的

- 浏览器内核（渲染进程）是多线程的
  - GUI渲染进程
  - JS引擎线程
  - 事件触发线程
  - 定时触发器线程
  - 异步http请求线程

## V8模块

- parser
  - 源码变为AST
- Ignition
  - 解释器
- TurboFan
  - 编译器，监视到热点代码会编译为机器码
- Orinoco
  - 垃圾回收

## 作用域

- 作用域是编译阶段确定的

## 执行上下文

- 全局执行上下文，函数执行上下文，eval

创建阶段

- 确定this值，this binding
- 词法环境创建
  - 环境记录，对外部环境的引用
- 变量环境创建

## 执行栈

管理执行上下文

## ref

- https://juejin.cn/post/6844903553795014663
- https://mp.weixin.qq.com/s/EWAcPO5CbdoYAm0HQpRl_g