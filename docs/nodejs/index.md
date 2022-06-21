# Nodejs

> JavaScript is synchronous by default and is single threaded
> Event-Driven Architecture

## 如何理解 asynchronous and non-blocking

- halt their execution until they need attention

- things can happen independently of the main program flow.

- More recently, Node.js introduced a non-blocking I/O environment to extend this concept to file access, network calls and so on.

## error-first callbacks

```javascript
const fs = require('fs');

fs.readFile('/file.json', (err, data) => {
  if (err) {
    // handle error
    console.log(err);
    return;
  }

  // no errors, process data
  console.log(data);
});
```
