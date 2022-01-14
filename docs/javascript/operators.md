# 运算符 （operator）

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

arithmetic > realtional > logical > assignment


## Others
- `delete` 关键词
delete an object, an object's property, or an element at a specified index in an array
- `typeof` typeof operand
- `void`
- `in` in operator returns `true` if the specified property is in the specified object
- `instanceof` The instanceof operator returns true if the specified object is of the specified object type. The syntax is:
- `...` spread operators



### Spread Operators

to expand arguments in func call, array literal, object literal

`...` 千万要记住前面是有点的
1. function call
```javascript
function myFunction(x, y, z) { }
const args = [0, 1, 2];
myFunction(...args);
```

2. array literals
```javascript
const parts = ['shoulders', 'knees']; 
const lyrics = ['head', ...parts, 'and', 'toes']; 
```

3. object literals
```javascript
const obj1 = { foo: 'bar', x: 42 };
const obj2 = { foo: 'baz', y: 13 };

const clonedObj = { ...obj1 };
// Object { foo: "bar", x: 42 }

const mergedObj = { ...obj1, ...obj2 };
```

4. nodeList literal
将多个querySelector得到的nodeList合并

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

方法

- === strict equality 严格相等
- == loose equality 非严格相等
- Object.is

### strict equality 严格相等

- 不是相同类型, 返回false
- 基本类型
  - 值相等返回true，否则返回false
    - 包括null，undefined，布尔，string，数值等
  - NaN与NaN不相等
- 引用类型
  - 指向相同对象，返回true，否则返回false

### loose equality 非严格相等

- 不是相同类型时，首先进行类型转换
- 之后进行类型比较



### 类型转换

前提是a b类型不相同，且进行非严格相等的判断

- a b均为基本类型，转换为number
- 基本类型与引用类型时，引用类型转换为基本类型
  - A.toString(), A.valueOf()
  - 基本类型除了string，number需要转为number

### Object.is()

- 与严格相等类似
- 处理数字时
  - +0和-0相等
  - NaN和NaN相等





## 参考文献

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness

