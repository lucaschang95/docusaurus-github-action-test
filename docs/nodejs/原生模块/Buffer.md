# Buffer

## What is a buffer?

A buffer is an area of memory.

It represents a fixed-size chunk of memory (can't be resized) allocated outside of the V8 JavaScript engine.

## How to create a buffer

`Buffer.from()`

- use UTF-8 encoding by default
- use `buffer.toString()` to get a string

`Buffer.alloc()`,
`Buffer.allocUnsafe()`

## changing the content of a buffer

- `buffer.write()`
- `buf[1] = 111;`

```js
const buffer = Buffer.alloc(4);
buffer.write('Hey!');
buf[1] = 111; // o in UTF-8
console.log(buf.toString()); // Hoy!
```