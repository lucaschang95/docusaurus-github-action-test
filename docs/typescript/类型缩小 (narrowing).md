# 类型缩小 (narrowing)

> overlays type analysis on JavaScript’s runtime control flow constructs

在 ts 类型系统中，有下面几种方法可以进行 narrowing

## ts通过什么进行类型缩小？

- typeof
- if else if else
- switch
- 真值校验
- 强等和弱等
- in 操作符
- instance of
- 第一次赋值时候 let a = x ? '1' : 1
  - a的type就是 number | string

## typeof

ts 硬编码了对象和 typeof 返回值的映射关系

## Truthiness narrowing 真值缩小

```ts
// both of these result in 'true'
Boolean("hello"); // type: boolean, value: true
!!"world"; // type: true,    value: true
```

## Equality narrowing 相等性缩小

===, !==, ==, and !=

两个值做 equality 操作时，ts 会对背后的 type 进行缩小

TypeScript knew their types also had to be equal

```ts
function example(x: string | number, y: string | boolean) {
  if (x === y) {
    // We can now call any 'string' method on 'x' or 'y'.
    x.toUpperCase();
          
(method) String.toUpperCase(): string
    y.toLowerCase();
          
(method) String.toLowerCase(): string
  } else {
    console.log(x);
               
(parameter) x: string | number
    console.log(y);
               
(parameter) y: string | boolean
  }
}
```

## in 操作符

"value" in x

value 是一个 string literal

x 是一个 union type

```ts
type Fish = { swim: () => void };
type Bird = { fly: () => void };
 
function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim();
  }
 
  return animal.fly();
}
```

## instanceof narrowing

## Assignments 赋值

TypeScript looks at the right side of the assignment and narrows the left side appropriately.

## Control flow analysis 流程控制分析

## 类型预测 type predicate

显式的告诉 ts，`isFish`返回的值与 pet 的类型强关联

```ts
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function getSmallPet() {
    return Math.random() > 0.5 ? new Fish() : new Bird();
}

// Both calls to 'swim' and 'fly' are now okay.
let pet = getSmallPet();
 
if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
}
```
