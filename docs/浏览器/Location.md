# Location

## 属性

### ancestorOrigins

> to determine, for example, whenever the document is being framed by a site which you don't expect it to be framed by

- 检测iframe?

### `href`

> entire URL

- 可读、可写
- `window.location.href = xxx` 效果等同于 `window.location.assign(xxx)`

### protocol

- `http:` or `https:`

### host, hostname, port

- hostname: domain of the URL
- host: hostname + port

### hash

- 包含`#`


### search

- 包含`?`

## 方法 methods

### `location.assign()`

> causes the window to load and display the document at the URL specified

- 会在history中添加一个新的记录

### `location.reload()`

> reloads the current URL, like the Refresh button

### `location.replace()`