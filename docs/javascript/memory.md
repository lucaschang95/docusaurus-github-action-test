# memory

> JavaScript automatically allocates memory when objects are created and frees it when they are not used anymore. 更好的了解JavaScript中的memory allocation, 可以帮助我们写出更高效的代码。

## memory lifecycle

1. Allocate the memory you need
2. Use the allocated memory (read, write)
3. Release the allocated memory when it is not needed anymore (known as **garbage collection**)

## memory allocation

- value initialization
- function calls

## garbage collection

> The most difficult aspect of this stage is determining when the allocated memory is no longer needed.

## reference-counting 引用计数法

### circular reference

```javascript
function f() {
  var x = {};
  var y = {};
  x.a = y;        // x references y
  y.a = x;        // y references x

  return 'azerty';
}

f();
```

### mark-and-sweep

- This algorithm is an improvement over the previous one since an object having zero references is effectively unreachable. The opposite does not hold true as we have seen with circular references. (0ref的一定是unreachable，unreachable的不一定0ref)

- 周期性的，从根节点开始，找出可以访问到的所有对象，无法访问到的就gc