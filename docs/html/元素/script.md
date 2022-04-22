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

## `<script>` 元素是否影响文档解析?

文档里面 script 标签，在两种情况下不会影响文档解析：

- 设置了 defer 属性
- 设置了 async 属性，并且脚本请求完成时，文档已经解析完成了
