# 非阻塞 Non-Blocking

## 什么是 Blocking?

> Blocking is when the execution of additional JavaScript in the Node.js process must wait until a non-JavaScript operation completes. This happens because the event loop is unable to continue running JavaScript while a blocking operation is occurring.

简而言之, a blocking operation 操作进行时, event loop 无法将控制权交还给 js 引擎, 必须等待其结束

Any code that is expected to run in a concurrent manner must allow the event loop to continue running as non-JavaScript operations, like I/O, are occurring.