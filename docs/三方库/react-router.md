# react-router

## 功能拆解

1. 向下承接 history
2. matching
3. rendering
4. navigating

## `<BrowserRouter />`, `<HashRouter />` 

- 负责向下承接 history 库
  - 初始化 history 实例，监听 history 变化
  - 将 location 信息和 navigation 上下文传递给子组件

## `<Route/>`

- normal route
- index route (pathless route)
- layout route

## 匹配过程

1. 拆分 branch
2. filter according to score
3. match from high score to low score, stop at first match
