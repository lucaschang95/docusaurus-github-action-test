# ProgressEvent

> measuring progress of an underlying process, like an HTTP request (for an XMLHttpRequest, or the loading of the underlying resource of an `<img>`, `<audio>`, `<video>`, `<style>` or `<link>`).

```javascript
xhr.onprogress = (pe) => {
  // here, pe is the ProgressEvent mentioned above
}
```