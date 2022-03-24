# ref

## 什么时候需要使用ref?

1. 处理focus, text selection, media playback, etc.
2. triggering imperative animations or behaviors. (命令式动画或者行为)
3. Integrating with third-party DOM libraries.

## 创建ref

### `React.createRef()`

```javascript
class MyComponent exteds React.Componet {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
}
```

### callback Refs

绑定或解绑DOM节点时，React会调用callback函数，并将 React 组件实例 或 DOM 节点作为参数传入。

> React will call the ref callback with the DOM element when the component mounts, and call it with null when it unmounts.
> callback ref调用时间早于`componentDidMount`和`componentDidUnmount`中，因此在该生命周期中一定能拿到新的 ref 值。

## 访问ref

> 当ref被传递给一个elements, 可以通过`ref.current`访问到该元素

ref的值取决于node的类型

- ref被用在HTML元素上，`ref.current`是对应的DOM元素，可以访问到该DOM元素的属性、方法等
- ref被用在React元素上，`ref.current`是对应的React元素的实例（instance），可以访问到该React元素的属性、方法等

例如：

`<input type="text" ref={this.textInput} />`: 告诉 React 我们希望将 `<input>` 对应的DOM赋值给 `this.textInput`

### useRef

- 使用方法同`React.createRef()`，也是通过`ref.current`来访问 DOM 元素或者 React 元素的实例

```javascript
const inputRef = useRef(null);
```

## forwardRef 传递ref

> `forwardRef` 可以像暴露自己的 ref 一样暴露子组件的 ref

```javascript
const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));
```

### 什么时候需要forwardRef

1. 获得DOM的ref
2. hoc函数

### forwardRef的问题

将子组件的DOM完全暴露给了父组件，有时这个并不是我们想要的效果。