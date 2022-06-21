# higher-order-components

> A higher-order component (HOC) is an advanced technique in React for reusing component logic. HOCs are not part of the React API, per se. They are a pattern that emerges from React’s compositional nature.

## 定义

Concretely, a higher-order component is a function that takes a component and returns a new component.

HOC 接受一个 Component，并返回一个新的 Component。

### 高阶组件于普通组件的区别

- 普通组件：完成 props 到 UI 的映射
- 高阶组件：完成一个 React 组件到另一个 React 组件的映射

### HOC 与 render props 的区别

1. 首先，HOC 与 render props 都完成了 Component 维度逻辑的复用。
2. 但是，HOC 是在 编译时/lexical scope 完成的逻辑复用，而 render props 是在运行时/dynamic scope 完成的逻辑复用。
3. 因此，render props 要比 HOC 灵活的多。
4. 而且，大多数情况下，HOC 可以完成的，render props 也一定能完成。
