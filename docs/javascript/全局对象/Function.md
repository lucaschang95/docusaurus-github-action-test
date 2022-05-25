# Function

> 每个函数都是一个 Function 实例 `(function() {}).constructor === Function`

## 构造器

`Function()`

- the Function constructor creates functions that execute in the global scope only.

## 实例属性

### `Function.prototype.arguments`

- array-like object

### `Function.prototype.name`

### `Function.prototype.length`

number of arguments expected by the function

## 实例方法

### `Function.prototype.bind()`

`Function.prototype.bind(thisArg, arg1, ... , argN)`

- `arg1, arg2, ..., argN` 将会 prepend

### `Function.prototype.apply()`

`Function.prototype.apply(thisArg [, argsArray])`

### `Function.prototype.call()`

`Function.prototype.call(thisArg[, arg1, arg2, ...argN])`