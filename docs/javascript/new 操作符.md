# new 操作符

`new constructor[([arguments])]`

## new 操作符干了什么?

1. 创建一个空对象
2. `__proto__` 属性指向了构造函数的原型对象
3. scope 的 this 指向 新创建的对象
4. 调用构造函数, 如果没有 return 对象, 将那个空对象 return 出去
