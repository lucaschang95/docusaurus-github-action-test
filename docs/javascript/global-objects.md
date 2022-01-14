# Global Objects

## Map

key-value pairs, remember original insertion order, any value may be used as either a key or a value

### api

**Map.prototype.size**

**Map.prototype.clear()**

**Map.prototype.delete(key)**

**Map.prototype.get(key)**

**Map.prototype.has(key)**

**Map.prototype.set(key,value)**

### 与Object的区别

- key type: map为any value, object为string和symbold
- key order: map为插入顺序

## WeakMap

### why weakMap

1. map: key,value是使用了两个数组，set, search是O(n)复杂度.
2. memory leak: weak reference, 可以garbage collected

缺点：
1. 没法获得size
2. 没法iterate

**WeakMap.prototype.delete(key)**

**WeakMap.prototype.get(key)**

**WeakMap.prototype.has(key)**

**WeakMap.prototype.set(key,value)**

## Set

iteration: insertion order

### api

**Set.prototype.size**

**Set.prototype.add(value)**

**Set.prototype.delete(value)**

**Set.prototype.has(value)**

**Set.prototype.clear()**

## WeakSet

iteration: insertion order

### api

**WeakSet.prototype.add(value)**

**WeakSet.prototype.delete(value)**

**WeakSet.prototype.has(value)**

**Set.prototype.clear()**
