# 对象类型

## 交叉类型 Intersection Types

> 用处：合并现有的对象类型 combine existing object types

```ts
interface Colorful {
  color: string;
}
interface Circle {
  radius: number;
}
 
type ColorfulCircle = Colorful & Circle;
```

接口（interface）和交叉类型是比较相似的