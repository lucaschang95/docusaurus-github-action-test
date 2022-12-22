# History

## 一句话概括

history 库作为浏览器原生的 `window.history` 对象的一个增强

- 在 `window.history` 之上通过观察者模式实现了事件通知的功能

Histroy 库作为 window.history 和 React 库的中间层

> The history library lets you easily manage session history anywhere JavaScript runs. A history object abstracts away the differences in various environments and provides a minimal API that lets you manage the history stack, navigate, and persist state between sessions.

1. abstracts away the differences

## ActionType

- `POP`: `popState`事件, 包括history.go(), history.back(), history,forward(), 浏览器返回键，前进键
- `PUSH`: histroy.push() / 原生 history.pushState()
- `REPLACE`: history.replace() / 原生 history.replaceState()

其中第一种是'active entry'的跳转，第二三种是'active entry'的新增

## block功能

## 参考

- <https://juejin.cn/post/7021799679616614436>

## red

- [https://reactrouter.com/docs/en/v6/getting-started/concepts#history-and-locations]
