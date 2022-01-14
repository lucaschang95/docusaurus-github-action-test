# Date 日期

## 创建日期

- Date( ) 等同于 new Date( ).toString( )
- `let date = new Date(1995, 11, 25, 0, 0, 0)`
  - 参数是年, 月, 日, 小时, 分钟, 秒







## Getter

- `Date.prototype.getTime()`
  - 得到自unix epoch 以来的**毫秒数**
- `Date.prototype.getFullYear()`
- `...getMonth()`
- `...getDate()`
- `...getDay()`
- `...getHours()`
- `...getMinutes()`
- `...getSeounds()`

**最常使用的是new Date()**



## 当前时间

- Date.now()
- new Date().getTime()