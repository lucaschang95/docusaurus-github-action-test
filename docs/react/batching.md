# batching

> Batching is when React groups multiple state updates into a single re-render for better performance. (什么是 react batching, 批量更新)

## 结论

1. Until React 18, we only batched updates during the React event handlers. Updates inside of promises, setTimeout, native event handlers, or any other event were not batched in React by default. 在 React 18 之前，react 仅仅在 React event handlers 内部才会进行批量更新。promise, setTimeout, native event handler 不会批量更新

## opt out of batching

```js
import { flushSync } from 'react-dom'; // Note: react-dom, not react

function handleClick() {
  flushSync(() => {
    setCounter(c => c + 1);
  });
  // React has updated the DOM by now
  flushSync(() => {
    setFlag(f => !f);
  });
  // React has updated the DOM by now
}
```

## 参考

- <https://github.com/reactwg/react-18/discussions/21>
