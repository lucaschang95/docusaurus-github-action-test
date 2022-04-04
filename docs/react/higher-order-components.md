# higher-order-components

> A higher-order component (HOC) is an advanced technique in React for reusing component logic. HOCs are not part of the React API, per se. They are a pattern that emerges from React’s compositional nature.

## 定义

Concretely, a higher-order component is a function that takes a component and returns a new component.

- 一般来说，组件：props -> UI, hoc: component -> component

hoc 是使用钱注入，获得处理之后的高阶组件