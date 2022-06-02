# Events

> provides us the EventEmitter class, which is key to working with events in Node.js.

```javascript
const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('start', (start, end) => {
  console.log(`started from ${start} to ${end}`);
});

eventEmitter.emit('start', 1, 100);
```

`emitter.addListener()`
`emitter.on()`

- 增加事件监听

- `once()`: add a one-time listener
- `removeListener()` / `off()`: remove an event listener from an event
- `removeAllListeners()`: remove all listeners for an event
