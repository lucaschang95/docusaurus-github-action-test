# Number

可以说，处理数字时，可以先考虑一下JavaScript里面Number的方法

- Number.parseInt, Number.parseFloat,

## NaN

如何产生NaN？

- 解析数字失败
  - parseInt(), parseFloat(), Number()
- 未定义操作数
- NaN操作数

Number.isNaN()

## safeInteger

- 



## 方法

- 判断类，转换类
- Number.isFinite( )
  - 数字，且部位Infinity, NaN
- Number.isInteger( )
  - 整数
- Number.isNaN
- Number.isSafeInteger( )
转换类
- Number.parseInt(string, radix)
- Number.parseFloat(string)
- Number.prototype.toExponential(digits)
  - 使用几位的科学技术法表示
- Number.prototype.toFixed(digits)
  - format
- Number.prototype.toPrecision(digits)
  - 位数包括整数
- Number.toLocaleString(locales, options)

## 数字的表示

### 前置知识

#### 整数转二进制

除2取余，逆序排列

#### 小数转二进制

乘2取余，顺序排列

#### 整数加小数转二进制

整数部分和小数部分分别转二进制

#### 原码

数值前面增加了一位符号位，正数时符号位为0，负数时符号位为1，其余位表示数值的大小

#### 反码

正数的反码与原码相同，负数的反码是除符号位之外取反

#### 补码

正数的补码与其原码相同，负数的补码是其反码末尾加1，然后去掉最高进位。**二进制数字在内存中以补码进行存储。**

### 数字存储

JavaScript中，数字不分整型和浮点型。所有的数字都是使用浮点型来存储，它采用IEEE754标准定义的64位浮点格式来表示数字

- 符号位S（Sign）：第63位
- 阶码E（exponent bias）：52-62位（11位）
  - -1023 - 1023：代表了2^-1023 - 2^1023
- 尾数M（Mantissa）
  - 代表了1 - 2
- 最终值为（+-）M^E

这也解释了

- Number.MAX_VALUE

- Number.MIN_VALUE和

- Number.MAX_SAFE_INTEGER

- Number.MIN_SAFE_INTEGER

0b: 2进制(binary)
0o: 8进制(octal)
0x: 16进制(hexadecimal)
n结尾: bigInt
