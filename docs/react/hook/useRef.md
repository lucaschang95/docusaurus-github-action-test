# useRef

> `useRef` is like a “box” that can hold a mutable value in its .current property.
> `useRef`返回一个可变的ref对象，其.current属性可以指向任何对象，可以是任何值，可以是null。

1. Mutating the .current property doesn’t cause a re-render

## 用途

1. useRef, 并把它绑定到ref属性上，便可以操作DOM
2. 保存数据，但是在数据变化时不回触发rerender
