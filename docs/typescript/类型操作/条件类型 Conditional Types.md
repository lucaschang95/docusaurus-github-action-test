# 条件类型 Conditional Types

```ts
SomeType extends OtherType ? TrueType : FalseType;
```

## 为什么会有条件类型？

可以将条件的映射放到类型上，这样可以更加灵活的控制类型的变化。

```ts
type NameOrId<T extends number | string> = T extends number
  ? IdLabel
  : NameLabel;

function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
  throw "unimplemented";
}
```
