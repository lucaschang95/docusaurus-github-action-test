# Type 类型

let num: number;

let str: string;

let bool: boolean;

#### 数组

let boolArray: boolean[];



#### 特殊类型

any, null, undefined, void

void用来表示一个函数没有返回值



## literal types 字面类型

- 只表示当前这个number / string
- 用在union类型里特别好用



## union types

- union type是重要的一种类型
- 用 | 分割开





## 枚举

数字类型，字符串类型

- ts的枚举类型是基于数字的，故可以将数字类型赋值给枚举类型。
- 结合位操作，使用数字枚举做标记
- 数字枚举：双向映射，字符串枚举：单向映射

#### 常量枚举

不会为枚举类型生成任何js代码，对性能有明显的提升作用

#### 异构枚举

就是数字枚举和字符串枚举的组合，一个枚举中既有数字又有字符串。



## any

所有类型都可以归为any类型

使用any类型无法获得ts提供的类型检查



## void

表示没有类型，比如函数返回值为空



## never

永不存在的类型



## 元组类型

数组，但是存放不同类型



## 函数

- 函数也是一等公民！



## best practice

- Always use as few type parameters as possible