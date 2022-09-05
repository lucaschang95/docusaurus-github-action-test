# 模块 module

## 如何判定一个文件是 module 还是 global script

files:

1. without an export
2. 或者没有 top-level await

 should be considered a script and not a module.

- 除了 `import xxx from 'xxx`, ts还支持 `import type xxx from 'xxx'`

## ts 针对 import 的新语法

```ts
import type { Dog } from './animail.ts'; // import type
import { createAnimal, type Dog } from './animal.ts'; // import inline type，可以混合 js value 和 ts type
```

## module resolution

如何从 import 或者 require 后面的 string，找到对应的模块
