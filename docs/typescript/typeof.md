# typeof

> TypeScript adds a typeof operator you can use in a type context to refer to the type of a variable or property (推导变量和属性的类型)

```typescript
function f() {
  return { x: 10, y: 3 };
}
type P = ReturnType<typeof f>;
```