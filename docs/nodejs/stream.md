# Stream

## What are Streams?

> one of the fundamental concepts
> Streams are not a concept unique to Node.js. They were introduced in the Unix operating system decades ago, and programs can interact with each other passing streams through the pipe operator (|).

## Why Streams?

1. memory efficient
2. time efficient

## 哪些使用了 Streams?

`process.stdin` returns a stream connected to stdin
`process.stdout` returns a stream connected to stdout
`process.stderr` returns a stream connected to stderr
`fs.createReadStream()` creates a readable stream to a file
`fs.createWriteStream()` creates a writable stream to a file
`net.connect()` initiates a stream-based connection
`http.request()` returns an instance of the http.ClientRequest class, which is a writable stream

## 类型

> Node.js 中有四种基本的流类型：

- Writable: 可写入
- Readable: 可读取
- Duplex: 双向
- Transform: 双向

- 事件： 所有流都是 EventEmitter 的实例，所以不同的流也具有不同的事件，事件也就是告知外界自己自身的工作状态的方式。
- 独立缓冲区： 可读流和可写流都有自己的独立缓冲区，而双工流和转换流是同时实现了可读流与可写流，则内部会同时有可读流缓冲区与可写流缓冲区。
- 字符编码： 而我们通常在进行文件读写时，操作的其实是字节流，所以在设置流参数 options 时需要注意编码格式，这是会影响 chunk 的内容和大小。而可读流与可写流默认的编码格式并不同，而每种不同的流也都不相同，所以在使用流操作前一定要先看默认参数设定，以免发生数据积压问题。

## 数据流向

process.stdin.pipe(writableStream);

从 Readable 到 Writable

## Two reading modes

flowing, paused

在流动模式下，数据会自动从底层系统读取，并通过 [`EventEmitter`](http://nodejs.cn/api/events.html#events_class_eventemitter) 接口使用事件尽快提供给应用程序

在暂停模式下，必须显式调用 [`stream.read()`](http://nodejs.cn/api/stream.html#stream_readable_read_size) 方法以从流中读取数据

所有的 [`Readable`](http://nodejs.cn/api/stream.html#stream_class_stream_readable) 流都以暂停模式开始，但可以通过以下方式之一切换到流动模式：