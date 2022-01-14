# CSS隐藏元素



## display: none

- 彻底消失
- 浏览器重排和重绘
- 不会触发点击



## visibility: hidden

- 消失后依然占据的空间
- 只会导致重绘，不会导致重排
- 无法触发点击事件



## opacity: 0

透明度设置为0

- 可以触发点击事件





## 其他

- 宽度，高度设置为0
- 移出viewport
- 设置尽可能小的z-index

## 