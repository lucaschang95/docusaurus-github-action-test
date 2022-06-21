# package

> A package is a folder tree described by a package.json file. The package consists of the folder containing the package.json file and all subfolders until the next folder containing another package.json file, or a folder named node_modules.

## package.json 中的 type 字段

很重要的字段 `type`, 当文件后缀名不为 `.mjs` 或者 `.cjs` 时, 通过 `type` 字段来指定文件的类型.

```json
"type": "module"
"type::": "commonjs"
```