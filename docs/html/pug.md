# pug

> 为 HTML 提供了更简洁的写法, 类似 CSS 中的 stylus

1. pug是对空格敏感的

```pug
div
	p Hello, world!
```

**渲染结果**

```html
<div>
  <p>Hello, world!</p>
</div>
```

## 语法

```pug
img#name.class1.class2(src="/test.png" alt="test")
```

**{元素名称}#{ID}.{类名}(其他属性) 元素内的文字**

