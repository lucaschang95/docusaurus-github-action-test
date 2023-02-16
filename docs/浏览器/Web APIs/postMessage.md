# postMessage

> cross-origin communication between Window objects

## 代码示例

```ts
postMessage(message, targetOrigin)

window.addEventListener("message", (event) => {
  if (event.origin !== "http://example.org:8080")
    return;

  // …
}, false);
```
