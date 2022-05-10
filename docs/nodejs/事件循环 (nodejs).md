# 事件循环 Event loop

> Node.js runs JavaScript code in the Event Loop (initialization and callbacks), and offers a Worker Pool to handle expensive tasks like file I/O
> When Node.js starts, it initializes the event loop, processes the provided input script (or drops into the REPL, which is not covered in this document) which may make async API calls, schedule timers, or call process.nextTick(), then begins processing the event loop.

## 时间循环 和 线程池 (worker pool)

What code runs on the Event Loop?

the Event Loop executes the JavaScript callbacks registered for events, and is also responsible for fulfilling non-blocking asynchronous requests like network I/O.

What code runs on the Worker Pool?

The Worker Pool of Node.js is implemented in libuv

Node.js uses the Worker Pool to handle "expensive" tasks

1. I/O intentive
   1. DNS
   2. File I/O
2. CPU intensive
   1. Crypto:
   2. Zlib

submit a task to the Worker Pool

## 事件循环

```text
   ┌───────────────────────────┐
┌─>│           timers          │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │     pending callbacks     │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │       idle, prepare       │
│  └─────────────┬─────────────┘      ┌───────────────┐
│  ┌─────────────┴─────────────┐      │   incoming:   │
│  │           poll            │<─────┤  connections, │
│  └─────────────┬─────────────┘      │   data, etc.  │
│  ┌─────────────┴─────────────┐      └───────────────┘
│  │           check           │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
└──┤      close callbacks      │
   └───────────────────────────┘
```

- Each phase has a FIFO queue of callbacks to execute

### timers

timer: 期望是 timeout 之后, 尽快执行

> Technically, the poll phase controls when timers are executed.

因为, Poll 阶段可以 starving the event loop

### pending callbacks

> This phase executes callbacks for some system operations such as types of TCP errors.

这种错误 queued to execute in the pending callbacks phase.

### poll

1. Calculating how long it should block and poll for I/O, then
2. Processing events in the poll queue.

will wait for an incoming connection or data on the socket.

If the poll queue is not empty, iterate through its queue

If the poll queue is empty

- `setImmediate()`, continue to the check phase
- not been scheduled by `setImmediate()`, wait for callbacks to be added to the queue

Once the poll queue is empty the event loop will check for timers, the event loop will wrap back to the timers phase

### check

poll 阶段, 如果 poll queue 已经空了, 而且有 `setImmediate()`, 就会跳到 check 阶段

### close

`socket.destory()`

## `process.nextTick`

 process.nextTick() is not technically part of the event loop

 phase 切换时候出触发

- callback 会在当次的 event loop phase 结束后, 下一次 event loop phase  开始前, 被调用
- `setTimeout` 和 `setImmediate` 都是在下一次 event loop 中进行调用
  - `setImmediate()`, which is equivalent to using `setTimeout(() => {}, 0)`

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
