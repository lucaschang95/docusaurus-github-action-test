# 映射类型 mapped type

```ts
type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};
```