# WeakSet

> lets you store weakly held objects in a collection

区别：

1. only objects
2. reference to the object is weak, gc if no other reference
3. WeakSets are not enumerable

WeakSet 最重要的用法是 Detect circular references

```javascript
const s = new WeakSet();
const o = {};
s.add(o);
s.has(o); // true
```
