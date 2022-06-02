# http

## 属性

### `http.METHODS`

### `http.STATUS_CODES`

## 方法

`http.createServer()`

`http.request()`

## 类 Classes

### `http.Agent`

> manage connections persistence and reuse for HTTP clients

### `http.ClientRequest`

> An `http.ClientRequest` object is created when `http.request()` or `http.get()` is called.

### `http.Server`

> returned when creating a new server using http.createServer().

- `server.close()`
- `server.listen()`

### `http.ServerResponse`

> An `http.ServerResponse` object is created when a client request is received.

```js
const server = http.createServer((req, res) => {
  // res is an http.ServerResponse object
});
```

`res.end()`: close the response

在 `res` 对象中, 可以操作 `res.headers` 和 `res.statusCode`

### `http.IncomingMessage`

An `http.IncomingMessage` object is created by

- `http.ClientRequest` when received response
- `http.Server` response received request