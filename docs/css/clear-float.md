# CSS清除浮动

**wrapper div高度未设置, 且里面有float元素. 这种情况下, wrapper div不能自动伸长以适应内容的高度. 此时便需要清除浮动.**

## 为什么要清除浮动？

- 想要不一样的样式

## 方法

- 父元素结束前插入清除浮动的块级元素
- :after 伪元素
  - content: ''; height: 0; display: block; clear: both;
- 父元素overflow属性
  - 使用overflow创建bfc
