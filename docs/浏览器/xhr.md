# XMLHttpRequest

## properties

`onreadystatechange`

event hand

`readyState`

- 0: UNSENT (created, open() not called yet) 还没有初始化
- 1: OPENED (open() has been called)
- 2: HEADERS_RECEIVED （send() has been called and the response headers have been received)
- 3: LAODING downloading; responseText holds partial data
- 4: DONE The operation is complete

`responseType`

```typescript
enum {
  '', // same as text
  'arraybuffer',
  'blob',
  'document',
  'json',
  'text', // default
}
```

`status`

status of the response of the request

`statusText`

status of the response of the request

## methods

`abort()`

abort the request if sent

## events
