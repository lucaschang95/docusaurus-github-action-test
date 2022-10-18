# nodejs的模块化

- node 中，每个文件都是一个独立的模块
- 每个模块都会被 nodejs 中的 module wrapper 所包围

## nodejs 如何决定一个模块是 esm 还是 cjs?

[https://nodejs.org/docs/latest/api/packages.html#determining-module-system](https://nodejs.org/docs/latest/api/packages.html#determining-module-system)

## 模块入口

`main` 字段

`exports` 字段是更新的 api，定义了模块的公共入口

## CommonJS规范

为了完善js再模块概念缺失而存在的一种规范

定义了两个主要概念：

- `require`函数，用于导入模块
- `module.exports`变量，用于导出模块

## require

- 加载后的模块会缓存在require.cache中，所以多次加载`require`得到的对象是同一个

### `require.cache`

缓存结果会放在这个对象中

```js
const assert = require('node:assert');
const realFs = require('node:fs');

const fakeFs = {};
require.cache.fs = { exports: fakeFs };

assert.strictEqual(require('fs'), fakeFs);
assert.strictEqual(require('node:fs'), realFs);
```

### require的时候发生了什么？

1. 解析路径

从相对路径解析出绝对路径

## module wrapper

```javascript
(function(exports, require, module, __filename, __dirname) {
 // code
})
```
