# DOMParser

```javascript
const parser = new DOMParser();
const doc = parser.parseFromString(
  '<!doctype html><body><h1>Hello World</h1></body>',
  'text/html'
);
console.log(doc.querySelector('h1').textContent);
```