# React Router 6

## router 干了什么事情？

1. Subscribing and manipulating the history stack
2. Matching the URL to your routes
3. Rendering a nested UI from the route matches

## 路由功能如何实现

- 监听路由变化
  - 劫持（代理）history对象
  - hashchange事件
- hook
- 渲染不同组件

## 3类组件

- router: BrowserRouter, HashRouter
- route matchers: Route, Switch
- navigation: Link, NavLink, Redirect
