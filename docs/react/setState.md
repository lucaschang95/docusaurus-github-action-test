# setState



## 异步

- 性能考虑
  - 父组件、子组件同时调用setState，异步收集保证子组件只会渲染两次

## 为什么不同步更新state?

- state同步更新了，props必须得下次渲染才能