# hook

- use state and other React features without writing a class
- hooks are functions that let you 'hook into' React state and lifecycle features from function components
- hook不会给dom树中添加额外的节点
  - hook可以讲生命周期中的逻辑整合到一起，但是event无法整合



## rules

- call at the top level
- call from React function components

# Hook





## 原理

1. function类型的fiber节点，在renderWithHooks中调用function
2. 函数中，通过hooks api创建hook对象
   1. 状态hook实现了状态持久化
   2. 副作用hook维护fiber.flags
3. 多个hook对象构成了链表结构
4. fiber树更新阶段，把current.memorizedState上的hook链表按顺序克隆到workInProgress.memoizedState上



api背后都会创建一个hook对象

memoizedState

baseState

baseQueue

queue

next







## useEffect

- commitBeforeMutationEffect
- 异步执行66



## useLayoutEffect

- commitLayoutEffect
- 同步执行