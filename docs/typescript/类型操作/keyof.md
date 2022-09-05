# keyof

> The keyof operator takes an object type and produces a string or numeric literal union of its keys.

示例：

下面这个例子里，P -> `"x" | "y"`

```ts
type Point = { x: number; y: number };
type P = keyof Point;
```
