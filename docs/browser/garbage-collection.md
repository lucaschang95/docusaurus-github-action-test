# garbage collection 垃圾回收

## 内存泄露

- 全局变量
- setInterval, setTimeout
- 不合理的闭包（事件处理函数）
- dom引用

**两种方法: 标记清除, 引用计数**

## 标记清除 mark and sweep

- '进入环境' 和'离开环境'

## 引用计数

标记当前多少个指针指向这个地方, 为0可以清除

## 

