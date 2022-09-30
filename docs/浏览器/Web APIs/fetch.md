# fetch

> fetch() start the process of fetching a resource from the network, returning a promise which is fulfilled once the response is available.

## 关联的其他 WebAPI

- `Response` object
- `URL`
- `Request`

## 语法

```js
fetch(resource)
fetch(resource, options)
```

`resource`

- string, 或者是一个 Request 对象

## options 选项

`method`

- `GET`, `POST` ...

`headers`

- any headers you want to add to your request

`body`

- `Blob`, `ArrayBuffer`, `TypedArray`, `DataView`, `FormData`, `URLSearchParams`

`mode`

- `cors`, `no-cors`, `same-origin`

`credentials`

`cache`

`redirect`

- how to handle `redirect` response

`referrer`

`keep-alive`

- 页面跳转后不会取消发送，而是会正常发送
- 和 HTTP 的 keep-alive 并不相同
