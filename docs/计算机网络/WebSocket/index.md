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