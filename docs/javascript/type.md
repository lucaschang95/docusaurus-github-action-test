# JavaScript类型

## 基本类型

- string
- number
- boolean
- null
- undefined

## 引用类型

- Object

## 栈内存

- 存储的值大小固定
- 空间较小
- 可以直接操作其保存的变量，运行效率高
- 由系统自动分配

## 堆内存

- 存储的值大小不定，可动态调整
- 空间较大，运行效率低
- 无法直接操作
- 存储的是其地址

## 判断类型

typeof

- 'undefined', 'number', 'string', 'boolean', 'object', 'function'

instanceof

- 涉及到原型链

Object.prototype.toString.call()

Array.isArray() 