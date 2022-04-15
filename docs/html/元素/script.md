# script 标签

## 属性

### `async`

对于 classic script: fetched in parallel to parsing and evaluated as soon as it is available

- 不是 parser-blocking JavaScript

### `defer`

1. to be executed after the document has been parsed, but before firing DOMContentLoaded. (等待DOM 解析完成)
2. keep in order

### `integrity`

### `type`

- `module`

`crossorigin`