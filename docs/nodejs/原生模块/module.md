# module

> 在 nodejs 中, 每个文件都被视为一个 “module", nodejs 支持两种 module: esm, cjs

整个 module 被 module wrapper 所包裹

Calling `require()` always use the CommonJS module loader. Calling `import()` always use the ECMAScript module loader.

## 哪些文件被视为 commonjs module?

1. 文件名以 `.cjs` 结尾
2. 文件名以 `.js` 结尾, package.json 中没有 `"type"` 字段
3. 文件名以 `.js` 结尾, package.json 中 `"type"` 字段为 `"commonjs"` 

## 模块缓存

1. Modules are cached after the first time they are loaded
2. Modules are cached based on their resolved filename. resolved filename 相同, 则被缓存

## 核心模块

永远返回 builtIn modules

## cycles

第二次 `require()` 同一个模块是, 会返回一个 `unfinished copy` 的 `module.exports`

## 引用方式

1. 绝对路径: start with `/`
2. 相对路径: start with `./` or `../`
3. 除此以外, 必须是 core module 或者是 node_modules 中的模块

否则, `require()` will throw a `MODULE_NOT_FOUND` error

## 如何去寻找 node_modules 中的模块?

从当前文件夹开始, 向上查找

## module wrapper

```js
(function(exports, require, module, __filename, __dirname) {
// Module code actually lives in here
});
```

- `__filename, __dirname`: 包含了当前文件的绝对路径和文件夹路径
  - `__dirname === path.dirname(__filename)`

## require

`require(id)`

- `id`:  module name or path
- require 还可以 require 一个 json 对象

## 篡改 node cache

```js
const assert = require('node:assert');
const realFs = require('node:fs');

const fakeFs = {};
require.cache.fs = { exports: fakeFs };

assert.strictEqual(require('node:fs'), fakeFs);
assert.strictEqual(require('node:fs'), realFs);
```

- 注意: `require('node:fs')` 无法被篡改, 因为会直接指向 `builtIn native modules`

## module scope 中的 module 对象

> In each module, the module free variable is a reference to the object representing the current module.

### `module.children`

由该 module 创建的所有子 module

### `module.loaded`

该 script 是否执行完毕