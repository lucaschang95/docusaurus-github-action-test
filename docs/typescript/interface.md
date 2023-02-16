# 接口（interface）

## 可选、只读属性

```typescript
interface Person{
    readonly name: string;
    age?: number;
}
```

只读属性只能在对象创建的时候修改其值

- 接口可以定义多次，会被自动合并为单个接口。

- An *interface declaration* is another way to name an object type:
- 优势：可扩展

```ts
interface Bear extends Animal {
  honey: boolean
}
```

## type 和 interface 的区别？

> type 其实叫 “类型别名”

### 相同点

- 都可以描述对象和函数

### 不同点

- interface 可以 extends; type 不可以 extends，但是可以通过交叉类型来实现 interface 的 extends 行为

#### type 可以，interface 不行

- type 可以声明基本类型的别名，联合类型，元组类型(tuple)

```ts
type name = string;
interface Dog {
  wong();
}
interface Cat {
  miao();
}
type Pet = Dog | Cat;

let a: Pet = {
  wong() {},
};
```

#### interface 可以，type 不行

- interface 能够重复声明，并进行声明合并