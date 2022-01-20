# XMLHttpRequest

```javascript
var xhr = new XMLHttpRequest();

// initialize a request
xhr.open(method, url, async)
xhr.responseType = 'json';

xhr.onload = function loadHandler() {
  // handle load
};
// we can usr xhr.onload to bind a callback,
// or we could bind several callbacks using
// xhr.addEventListener('load', f)

xhr.onabort = function abortHandler() {
  // handle abort
};

xhr.send();
```

## properties

### onreadystatechange

### readyState

### responseType

```typescript
enum {
  '',
  'arraybuffer',
  'blob',
  'document',
  'json',
  'text',
}
```

## events

### abort

### error

### load

### loadend

### loadstart

### progress

### timeout