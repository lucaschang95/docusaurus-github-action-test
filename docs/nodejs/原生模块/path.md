# path

## 基础知识

`path segment separator`: 路径段分隔符

## 方法

### `path.format()`

- 将路径对象格式化为字符串
- opposite of `path.parse()`

## `path.resolve()`

> resolves segments into an absolute path.

- 如果拼接完, 是一个 absolute path, 则返回这个 path.
- 如果拼接完, 是一个 relative path, 则返回这个 current working directory + path.

因此, `path.resolve()` 一定会返回一个 absolute path.

If no path segments are passed, path.resolve() will return the absolute path of the current working directory.

## Getting information out of a path

```javascript
const notes = '/users/joe/notes.txt';

path.dirname(notes); // /users/joe
path.basename(notes); // notes.txt
path.extname(notes); // .txt
path.basename(notes, path.extname(notes)); // notes
```

## Working with paths

```js
const name = 'joe';
path.join('/', 'users', name, 'notes.txt'); // '/users/joe/notes.txt'

path.resolve('joe.txt'); // '/Users/joe/joe.txt' if run from my home folder

path.normalize('/users/joe/..//test.txt'); // '/users/test.txt'
```
