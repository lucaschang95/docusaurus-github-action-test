# Tree shaking

> _Tree shaking_ is a term commonly used in JavaScript context for dead-code elimination

## 前提

- es6的模块语法
- 确认babel没有转为require
- sideEffects
- production mode

## side-effects

通过设置 packge.json 中的 side-effect 和 `/*#__PURE__*/` annotation

## 参考

- https://webpack.js.org/guides/tree-shaking/#mark-the-file-as-side-effect-free