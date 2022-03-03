# 运算符(operator)

## 逻辑运算符(logic operator)

### 逻辑与(&&)

1. 操作值均为boolean

正常计算

2. 一个操作值不是boolean

- 第一个操作数转换后是true，返回第二个值
- 第一个操作数转换后是false，返回第一个值

### 逻辑或(||)

#### 操作值均为boolean

  正常计算

#### 一个操作值不是boolean

- 第一个操作数转换后是false，返回第二个值
- 第一个操作数转换后是true，返回第一个值

Comparison operators
`==` `!=` `===` `!==` `>` `<` `>=` `<=`

- 算数运算符
  `+` Addition `-` Subtraction `*` Multiplication `/` Division `**` 
  power

- 比较运算符
- 逻辑运算符

#### 位运算符 （bitwise）

Logical operators `&&` `||` `!`

Assignment operators
`x = y` `x += y` `x -= y` `x *= y` `x /= y` 
`x %= y` `x **= y` `x <<= y` `x >>= y` `x >>>= y`
`x &= y` `x ^= y` `x |= y`

Conditional (ternary) operator `let greeting = (condition) ? run this code : run this code instead;`

## 运算符优先级（Operator precedence）

[Operator precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Operator_precedence)

arithmetic > realtional > bitwise > logical > assignment

算数 比较 按位 逻辑 赋值

## Others

- `delete` 关键词
delete an object, an object's property, or an element at a specified index in an array
- `typeof` typeof operand
- `void`
- `in` in operator returns `true` if the specified property is in the specified object
- `instanceof` The instanceof operator returns true if the specified object is of the specified object type. The syntax is:
- `...` spread operators

## 优先级

（从高到低）

- grouping，括号

- member access，computed memeber access，function call，new，optional chaining 可选链式调用
- 后置递增、后置递减
- 一元运算符
- 算数运算符
- 关系运算符
- 逻辑运算符
- 赋值运算符

## 相等性判断

### 类型转换

前提是a b类型不相同，且进行非严格相等的判断

- a b均为基本类型，转换为number
- 基本类型与引用类型时，引用类型转换为基本类型
  - A.toString(), A.valueOf()
  - 基本类型除了string，number需要转为number

## 运算符优先级

- grouping
- member access, new, function call
- postfix increment/decrement
- 逻辑操作符
- 算数操作符
- 比较操作符
- 相等操作符
- 位操作符
- 赋值操作符

## 参考文献

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness