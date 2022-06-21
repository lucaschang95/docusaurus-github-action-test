# 内存泄露

全局变量
在 process/global上挂载数据, 这个很容易理解.
应对: 通过 Eslint 保证没有全局变量.

事件监听
事件监听的回调函数会一直保持引用, 继而使用回调函数所使用的闭包数据不能得到释放.
应对: 需要在添加事件监听时, 留心它的解除.

缓存
在这里使用闭包来完成缓存功能, caches 永远不会释放, 在使用不当时可能会大量占用内存.
应对: 要对缓存的内存占用量有所评估. 可以采用 LRU 等具有 TTL 管理的工具, 也可以使用 Redis 等缓存服务.

```js
const caches = {};
module.exports = (name, value) => {
  caches[name] = value;
}
```

闭包

```js
function out() {
  const bigData = new Buffer(100);
  inner = function () {
    void bigData;
  }
}
```

这里的 inner 挂载到了 global 上, 不会被释放; 进而导致在闭包中的 bigData 也不会被释放.
应对: 构造闭包时要注意, 各类引用关系, 不要使闭包过于复杂.
