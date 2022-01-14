# Fiber

一个fiber对象代表一个即将渲染（workInProgress）或者一个已经渲染的组件（current）



- 适合animation, layout, gestures
- incremental rendering, 将渲染分为chunks, 将渲染分为多个帧
- the ability to payse, abort, or reuse work
- 可以防止掉帧
- 主要目的：充分调度



## 属性

pendingProps： 从ReactElement对象中传入的props

- 用于和memoizedProps比较得出属性是否变动

memoizedProps：上一次生成子节点时候用到的属性

updateQueue：存储state更新的队列，当前节点state改动之后，都会创建update对象添加到这个队列中

memoizedState：用于输出的state

dependencies：该fiber节点依赖的contexts，events等

mode：运行模式

flags：标志位

alertnate：内存中的另一个fiber



## fiber是什么？

- a unit of work
- reimplementation of th the stack
- a virtual stack frame
- 实际上是一个js对象，包含component, input, output