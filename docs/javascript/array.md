# Array数组



## 创建数组

#### 字面量

- `[element0, element1...]`

#### Array object

- `new Array(element0, element1...)`
- `Array(arrayLength)`
- `Array.of(element0, element1...)`

## 静态方法

### from

- Array.from(obj)
  - array-like objects
  - iterable objects(map, set)变为数组

### isArray

- 是否是数组

### of

- Array.of(a,  b, c...)
- 将a, b, c等构造为一个数组



## 方法

### concat

- arr1.concat(arr2, arr3, ...)
- 拼接一个新数组
- 原数组不改变
- 返回新数组

### entries

- 返回array iterator对象
- 调用next()函数，返回value、done的值

### every

- 校验数组中每一项是否满足提供的函数的检验，返回布尔值

### fill

- 填充特定值，原数组被改变
- fill(value, start, end)
- start和end保持传统，左闭右开

### filter

- arr.filter(fn)
- 提取出满足条件的数组项
- 原数组不变

### find

- find(fn)
- 找到数组中第一个满足条件的数组项（返回数组项，而不是index）
- 没找到，返回undefined

### findIndex

- 原理同find类似，findIndex(fn)
- 找到数组中，第一个满足条件的index
- 没找到，返回-1

### flat

- arr.flat(depth)
- 创造一个新数组，不改变原数组
- depth为展开的深度（递归的调用几次）

### forEach

- forEach( fn(element, index, array) { ... }, thisArg)
- 注意除了fn之外的第二个参数

### includes

- includes(searchElement, fromIndex)

### indexOf

- indexOf(element, fromIndex);
- 作用与findIndex相同，返回index
- findIndex有更精细化的控制

### join

- join(str)
- 返回一个拼接后的string，添加你想要的separators
- 会自动把其他类型元素变为string

### keys

- key值的Iterator obj

- next, 

### lastIndexOf

- lastIndexOf(element, fromIndex)
- indexOf是找到第一个符合的element，lastIndexOf是找到最后一个符合的element

### map

- map(fn(element, index, array), thisArg) （语法同forEach）
- 根据提供的fn，构建出一个新的数组来

### pop

- pop()
- 返回pop出的元素

### push

- push(element)
- 返回push之后数组的长度

### reduce

- reduce(fn, initialValue)
- fn: (accumulator, currentValue, index, array) => { ... }

### reverse

- arr.reverse()
- 原位的 in-place，原数组被改变
- 返回该数组

### shift

- shift()
- 移除第一个元素

### slice

- slice(start, end) 
- start和end是optional
- 不改变原数组，return a shallow cp
- slice其实是在access这个数组的一部分

### some

- some(fn)
- 校验数组中是否有元素满足fn提供条件

### sort

- sort(fn(firstEl, secondEl))
- 关键是compareFn
- 原位的
- 正常的话，compareFn给出的结果应该是负的

### splice

- splice(start, deleteCount, element1, element2 ....)
- 作用：移除，添加元素
- 返回被移除的元素

### toString

- 作用类似join()

### unshift

- unshift()
- 返回unshift之后的长度

#### `Array.prototype.push()`

- 原数组改变
- 返回被push的元素



#### `Array.prototype.pop()`

- 原数组改变
- 返回被pop的元素



#### `Array.prototype.shift()`

- 原数组改变
- 返回被shift出去的元素



#### `Array.prototype.unshift()`

- 原数组改变
- 返回unshift进来的元素



####  `Array.prototype.filter()`

- `arr.prototype.filter(callback(element, index, array))`
  -  如果返回false, 那么这个element就会被过滤掉
  - 不改变原数组



#### `Array.prototype.includes()`

- `arr.includes(valueToFind[, fromIndex])`
- `fromIndex`: 可正可负



#### Array.prototype.reduce()

- `arr.reduce(reducer[, initialValue])`
- reducer接受4个参数
  - acc
  - cur
  - idx
  - src



#### `Array.prototype.slice()`

- `arr.slice([begin[, end]])`
- 不会改变原数组
- 返回shallow copy



#### `Array.prototype.indexOf()`

- `arr.indexOf(searchElement[, fromIndex])`

- 没找到返回 -1;



#### Array.prototype.splice()

- `arr.splice(start[, deleteCount[, item1...]])`
- 删除一些, 加入一些



#### Array.prototype.map()

- syntax：`newArray = arr.map(function callback(currentValue[, index[, array]]) { return element for new_array}, this arg)`



#### Sort

- `array.sort(compareFunction)`, 
- `comparefunction(a, b)`
  - return less than 0, 那么a的 index靠前. 
  - greater than 0, 那么b的index靠前
  - 0, remained










### Destructuring assignment
unpack value from arrays, or objects, into distinct variables.
```javascript
// destructure array
let [name, age] = ['John', 26];

// destructure object
// 对object进行结构 需要前面加上let, const
const o = {p: 42, q: true};
const {p: foo, q: bar} = o;


//下图这个函数是对传入的obj进行解构
function whois({displayName, fullName: {firstName: name}}) {
  return `${displayName} is ${name}`;
}

let {[key]: foo} = {z: 'bar'};
```

1. 赋值时解构
2. 命名函数是进行解构


通过function返回array, 在通过destructuring, 可以使得返回值使用更加灵活.

- 选择性解构赋值





### Array.prototype.sort()

`sort([compare func(a, b)])`
- if `compare func` return
  - less than 0, a index < b index
  - greater than 0, a index < b index
  - 
- AESC order





## 遍历Iteration



#### `Array.prototype.forEach()`

- syntax: `arr.forEach(callback(currentValue [, index [, array]])[, thisArg])`
- 遍历顺序: ASC, 升序
- sparse array中不会遍历到





#### map method

- syntax: `arr.forEach(callback(currentValue [, index [, array]])[, thisArg])`
- 不同点: callback function里面要有return statement, 返回single value