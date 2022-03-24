# useImperativeHandle

> 可以自定义暴露给父组件的ref，应该和forwardRef一起使用

```javascript
function FancyInput(props, ref) {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));
  return <input ref={inputRef} />;
}
FancyInput = forwardRef(FancyInput);
```

通过`useImperativeHandle`，将父组件传入的 ref 和 `useImperativeHandle` 第二个参数的返回值绑定在一起

只暴露给父组件需要用到的DOM方法