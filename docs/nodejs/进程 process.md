# Process 进程

## 几个重要属性

- stdin 标准输入刻度流
- stdout 标准输出可写流
- stderr 标准错误输出流
- argv 终端输入
- env 环境信息
- pid 应用程序进程id

## `process.exit()`

> the process is immediately forced to terminate.

any callback that's pending, any network request still being sent, any filesystem access, or processes writing to stdout or stderr - all is going to be ungracefully terminated right away.

## `SIGTERM` 信号

```javascript
process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Process terminated')
  })
})

process.kill(process.pid, 'SIGTERM')``
```

## ref

- https://blog.csdn.net/chy555chy/article/details/52556318