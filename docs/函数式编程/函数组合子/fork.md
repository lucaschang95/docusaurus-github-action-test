# fork

```js
const join = function (joinFn, forkFn1, forkFn2) {
  return val => joinFn(forkFn1(val), forkFn2(val));
}
```