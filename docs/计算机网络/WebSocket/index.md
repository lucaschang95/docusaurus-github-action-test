# WebSocket

- 双向通讯的优劣
- 如何管理会话
- 如何维持长连接
- 兼容 HTTP 协议
- 支持扩展

101 Switch protocol

## 设计哲学

> 在 web 约束下暴露 TCP 给上层

- 给予帧，不是基于流
**依赖HTTP协议进行一次握手, 之后直接进行TCP传输**

Connect: Upgrade

Upgrade: websocket

基于HTTP/1.1

ping pong 维持连接

## 特点

- 建立在TCP协议之上
- 与HTTP协议有很好的兼容性, 默认端口也是80或者443, 握手阶段采用HTTP协议
- 没有同源限制

## 建立

`let ws = new WebSocket(ws://localhost:8080)`

#### 状态

**ws.readyState**

- 0: **Connecting** 正在连接
- 1: **Open** 连接成功, 可以通行了
- 2: **Closing**
- 3: **Closed**

## 事件

#### onopen

- 也可以使用 `addEventListener` (open)

#### onclose

- 也可以使用 `addEventListener` (close)

- `event.code`, `event.reason`

#### onmessage

- 也可以使用 `addEventListener` (message)
- `event.data`

#### onerror
