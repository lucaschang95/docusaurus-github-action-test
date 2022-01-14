# Stream





## Two reading modes

flowing, paused

在流动模式下，数据会自动从底层系统读取，并通过 [`EventEmitter`](http://nodejs.cn/api/events.html#events_class_eventemitter) 接口使用事件尽快提供给应用程序

在暂停模式下，必须显式调用 [`stream.read()`](http://nodejs.cn/api/stream.html#stream_readable_read_size) 方法以从流中读取数据

所有的 [`Readable`](http://nodejs.cn/api/stream.html#stream_class_stream_readable) 流都以暂停模式开始，但可以通过以下方式之一切换到流动模式：