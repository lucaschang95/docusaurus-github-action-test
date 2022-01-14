# useEffect

- telling React to run your 'effect function' after flushing changes to the DOM
- 每次传入的匿名函数都是不一样的（每次构造一个新的），有意为之

## motivation

- 生命周期里包含不同逻辑
- 同一逻辑分布在不同生命周期函数里

## 对应的lifecycle method

componentDidMount, componentDidUpdate, componentWillUnmount

## 第1个参数

- 每次传入的匿名函数都是不一样的（每次构造一个新的），有意为之
- return代表需要清理的内容
- dom构造好之后，先执行上次清理的函数，在执行这次的effect

## 第2个参数

- 条件执行
- []代表componentDidMount，只是第一次执行
- 必须：包含所有外部作用域中会随时间变化并且在 effect 中使用的变量

## 时机

- after every render