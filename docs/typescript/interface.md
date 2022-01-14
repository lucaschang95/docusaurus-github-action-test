# 接口（interface）



#### 可选、只读属性

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

```
interface Bear extends Animal {
  honey: boolean
}
```