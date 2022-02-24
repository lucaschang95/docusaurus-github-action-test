# Float

`float: left, right`

`clear: lefr, right, both`

## 如何清除浮动

1. 添加带`clear: both`属性的空元素

2. 父元素BFC，如设置`overflow: hidden`和`overflow: auto`

3. ::after的伪元素

```css
.main::after {
  content: '';
  display: block;
  clear: both;     
}
```
