# JSON



## JSON.stringify

- JSON.stringify(value, replacer, space)
- undefined, function, symbol不会被序列化
- 对象，仅有enumerable属性才会被序列化
- 转换值如果有 toJSON() 方法，该方法定义什么值将被序列化



循环引用会报错 a.a = a;