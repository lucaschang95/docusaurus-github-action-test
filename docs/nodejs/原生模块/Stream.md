# Stream

## What are Streams?

> one of the fundamental concepts 
> Streams are not a concept unique to Node.js. They were introduced in the Unix operating system decades ago, and programs can interact with each other passing streams through the pipe operator (|).
> All streams are instances of EventEmitter

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

Readable
Writable
Duplex
Transform

## 数据流向

process.stdin.pipe(writableStream);

从 Readable 到 Writable