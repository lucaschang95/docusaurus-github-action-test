# useEffect

- 什么操作应该放在useEffect中：mutations, subscriptions, timers, logging, and other side effects

- 默认：每次render is committed to the screen



## clean-up function

- 放到了useEffect参数的return中
- 一个组件多次渲染，the previous effect is cleaned up before executing the next effect. （先执行上一个effect的clean-up）



## 条件执行

- useEffect的第二个参数，放到一个数组中