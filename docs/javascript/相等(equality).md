# 相等 (equality)

> JavaScript提供3种操作符来判断相等: loose equality, strict equality, Object.is()

## `===`

`NaN !== NaN`
`+0 === -0`
`undefined === undefined`
`null === null`

结论：

1. 在`===`中，`x !== x`唯一的情况就是x是NaN

## `==`

两个操作数为`A`和`B`，在不考虑bigint的情况下，

- `A`和`B`均为primitive: `ToNumber(A) === ToNumber(B)`
- `A`和`B`均为Object: `A === B`
- `A`和`B`均为Object+primitive: `ToPrimitive(Object) === B`
  - primitive需要转换为string/number

`NaN != NaN`
`+0 == -0`

## Object.is

和全等的区别在于：

1. `Object.is(NaN, NaN) -> true`
2. `Object.is(+0, -0) -> false`

## 参考

1. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness