# XMLHttpRequest

```javascript
var xhr = new XMLHttpRequest();

// initialize a request
xhr.open(method, url, async)

xhr.responseType = 'json';

// cross site request using credentials(cookie)
xhr.withCredentials = true;

xhr.onload = function loadHandler() {
  // handle load
};
// we can usr xhr.onload to bind a callback,
// or we could bind several callbacks using
// xhr.addEventListener('load', f)

xhr.onabort = function abortHandler() {
  // handle abort
};

xhr.onreadystatechange = function abortHandler() {
  // handle readystatechange
  // access newest readyState here
};

xhr.send();

console.log(button);
```

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

`error`

`abort`

`timeout`

`load`

- XMLHttpRequest transaction completes successfully

`loadend`

`loadstart`

`progress`

- Fired periodically when a request receives more data