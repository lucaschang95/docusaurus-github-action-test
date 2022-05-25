# Object

## 静态方法

### `Object.defineProperty()`

`Object.defineProperty(obj, prop, descriptor)`

- obj: 对象
- prop: 属性名 (string / symbol)
- descriptor: 属性描述符

返回该 obj 对象

### `Object.seal()`

> preventing new properties from being added to it and marking all existing properties as non-configurable. Values of present properties can still be changed as long as they are writable.

1. 无法添加新属性
2. 无法删除属性
3. 已有属性可以修改

### `Object.freeze()`

> 比 `Object.seal()` 更严格，已有属性不可以修改

原理: 将对象的所有属性的 `writable` 和 `configurable` 设置为 `false`

是一种 “浅冻结” 的方式

### `Object.create`

`Object.create(proto, propertiesObject)`

### `Object.keys()`

1. 非 Symbol 属性
2. own enumerable property

## 实例方法

### `Object.prototype.propertyIsEnumerable()`