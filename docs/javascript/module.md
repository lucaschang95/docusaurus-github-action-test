# Module

> module是构建大型程序的基石

- 一个复杂程序, 依照一定规则, 封装成几个块(文件), 并组合在一起.
- 每个块向外部暴露一些接口(方法), 用于模块之间的通信

- 可维护性
- 命名空间
- 可复用性

## 现存module规范

## syntax

### Export

- Re-exporting
  - `export * from 'src/other_module';`
- inline, clause
- inline named exports
  - Variable declaration
  - Function declarations
  - Class declarations

### Import

- Default import
  - 'default' is reserved word
- Namespace import
- Named imports
  - default imports is a special named import, `import foo from 'xxx', import { default as foo } from 'xxx'`
- Empty import

## 特点

1. Imports and exports must be at the top level. （static)
2. Imports are hoisted.
3. Imports are read-only views on exports (模块内的闭包仍然存在)

## `<script type='module'>`

- context
  - module的变量不是全局，this不指向window
- executed synchronously