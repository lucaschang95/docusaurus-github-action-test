# nodejs的模块化





## CommonJS规范

为了完善js再模块概念缺失而存在的一种规范



定义了两个主要概念：

- `require`函数，用于导入模块
- `module.exports`变量，用于导出模块



## require

- 加载后的模块会缓存在require.cache中，所以多次加载`require`得到的对象是同一个



#### require的时候发生了什么？

1. 解析路径

从相对路径解析出绝对路径



```javascript
(function(exports, require, module, __filename, __dirname) {
	// code
})
```

