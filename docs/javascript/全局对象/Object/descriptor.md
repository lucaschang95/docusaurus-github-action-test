# Descriptor

## 基础

对象的每个属性都有对应的 property descriptor

- 对象属性的 descriptor 分为 data descriptor 和 accessor descriptor （默认是 data descriptor）
- 属性都是可选的, 都有默认值
- `configurable` 和 `enumerable` 在两种 descriptor 都有
- `data descriptor` 包括 `value`, `writable`
- `accessor descriptor` 包括 `get` 和 `set`

## `configurable`

`configurable` 属性控制了:

1. 属性类型是否可以改变 (从 data descriptor 变为 accessor descriptor)
2. 属性是否可以删除

## enumerable

The enumerable property attribute defines whether the property is picked by Object.assign() or spreadoperator. For non-Symbol properties it also defines whether it shows up in a for...in loop and Object.keys() or not.

1. `Object.assign()` or `spread operator`
2. 对于非 Symbol 情况，还影响 `for...in` loop, `Object.keys()` 
3. Defaults to false.

value
The value associated with the property. Can be any valid JavaScript value (number, object, function, etc). Defaults to undefined.

writable
true if the value associated with the property may be changed with an assignment operator. Defaults to false.

An accessor descriptor also has the following optional keys:

get
A function which serves as a getter for the property, or undefined if there is no getter. When the property is accessed, this function is called without arguments and with this set to the object through which the property is accessed (this may not be the object on which the property is defined due to inheritance). The return value will be used as the value of the property. Defaults to undefined.

set
A function which serves as a setter for the property, or undefined if there is no setter. When the property is assigned, this function is called with one argument (the value being assigned to the property) and with this set to the object through which the property is assigned. Defaults to undefined.