# Event loop

## 机制解析

- timer: setTimeout(), setInterval()的callback
- pending callback: I/O deffered callbacks
- idle, prepare: 仅系统内部使用
- poll(轮询): 检索I/O事件，执行I/O回调
- check: setImmediate()的回调
- close callbacks

## 参考

- <https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/>
- <https://juejin.im/post/6844903621444763662>
