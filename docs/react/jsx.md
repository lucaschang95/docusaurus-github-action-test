# JSX

> React 表示层，helping react distinguish from different element type

1. react不需要使用jsx，但是一般人们会将他们组合使用。
2. jsx代码需要经过babel转换，转化为createElement函数执行操作。
3. jsx可以作为值进行传递（他实际上就是React.createElement()）,代表的其实是一个object
4. 使用单括号包裹JavaScript表达式: 属性，文本
5. 防止xss：React DOM渲染时候会将文本先转义

- 在 React 17 中, jsx 已经默认不使用`React.createElement()`进行解析，而是使用 React 库中的`_jsx`函数进行解析

## react element

使用babel可以将jsx转换为react element，react通过react element构建虚拟DOM

## React 中支持几种 jsx 格式？

### native element

```js
const element = {
  $$typeof: Symbol(react.element)
  key: "5"
  props: {children: 'Hello World!'}
  ref: null
  type: "p"
}
```

### 函数组件

```js
function About(props: any) {
  return (
    <div>
      <h2>About</h2>
      <p>{props?.value ?? 0}</p>
    </div>
  );
}

const element = {
  $$typeof: Symbol(react.element)
  key: "5"
  props: {children: 'Hello World!'}
  ref: null
  type: About
}
```

### 类组件

```js
class Layout extends React.Component { 
  render() {
    return (
      <div>Hello world!</div>
    );
  }
}

const element = {
  $$typeof: Symbol(react.element),
  type: Layout,
  key: null,
  ref: null,
  props: {},
}
```

## React.forwarRef

```js
const element = {
  $$typeof: Symbol(react.forwardRef)
  type: {
    $$typeof: Symbol(react.forward_ref)
    render: (props, ref) => {…}
    displayName: (...)
  },
  key: null,
  ref: {
      "current": null
  },
  props: {
      "children": "Click me!"
  },
  _owner: null
}
```

### React.fragment

```js
var element = {
  $$ty;peof: Symbol(react.element),
  type: Symbol(react.fragment),
  key: key,
  ref: ref,
  props: [{
    ...
  }],
  _owner: owner
}
```

context.provider

```js
const element = {
  $$typeof: Symbol(react.element)
  key: null
  props: {value: 'test'}
  ref: null
  type: {$$typeof: Symbol(react.provider), _context: {…}}
  _owner: null
  _store: {validated: false}
}
```

