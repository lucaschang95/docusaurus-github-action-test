# 类型别名 Type Aliases

```ts
type Point = {
  x: number;
  y: number;
};

type ID = number | string;
```

## 类型别名 和 interface 区别

extending

```ts
interface Bear extends Animal {
  honey: boolean;
}

type Bear = Animal & {
  honey: boolean;
};
```

adding new field

换句话说，interface 可以声明多次，并且进行 delaration merging 的

```ts
interface Window {
  title: string;
}

interface Window {
  ts: TypeScriptAPI;
}
// correct!

type W = {
  title: string;
}

type W = {
  ts: TypeScriptAPI;
}
// Error: Duplicate identifier 'W'.
```

primitives

```ts
type X = string;
// correct!

interface X extends string {

}
// Error!