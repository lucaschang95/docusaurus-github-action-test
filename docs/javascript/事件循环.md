# Event Loop

## Introduction

- 为什么JavaScript是单线程
浏览器脚本语言, 多线程会带来问题

### 浏览器包含哪些进程

- Browser进程
- 第三方插件进程
- GPU进程
  - 3D绘制
- 渲染进程
  - 浏览器内核（内部是多线程）
  - 每一个tab页面都有一个渲染进程

### 浏览器内核（渲染进程）

浏览器内核是多线程的

- GUI渲染线程
- JS引擎线程（V8）
  - js是单线程运行的
- 事件触发线程
  - 用来控制事件队列，管理着一个事件队列（task queue）
  - setTimeout, 鼠标点击， ajax请求
  - 事件触发callback都需要js引擎去处理
- 定时触发器线程
  - 只要异步任务有结果，就会在任务队列放置一个事件回调
- 异步http请求线程

## 事件循环 (Event Loop)

- js分为同步任务和异步任务
- 同步任务: 主线程上执行，形成执行栈
- 异步任务: webapi触发（setTimeout定时结束, ajax状态转换)，由事件触发线程管理着，触发时在任务队列中添加回调函数。

简单解释：

1. 主线程代码运行时，会派生出其它的宏任务和微任务。
2. 主线程代码执行完毕，执行派生出的微任务（全部执行）。
3. 页面渲染（GUI渲染进程）
4. 继续执行主线程代码（如上一次主线程代码派生出的其它宏任务）

![事件循环](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/1/21/1611938ba2b4b9f4~tplv-t2oaga2asx-watermark.awebp)

### 循环过程

主线程代码 -> 渲染 -> 主线程代码 -> 渲染

主线程代码 -> webapi -> 任务队列 -> 塞入主线程执行 -> 渲染

#### 宏任务

- 包括: script标签
- setTimeout
- setInterval
- setImmediate
- requestAnimationFrame

#### 微任务

- promise.then
- catch
- finally
- Object.observe
- process.nextTick
- MutationObserver（html5新特性）


## reference

- <https://juejin.cn/post/6844904050543034376>