# supports

> The @supports CSS at-rule lets you specify declarations that depend on a browser's support for one or more specific CSS features. This is called a feature query.

> 查看是否支持某一项属性

```css
/* valid when supported */
@supports (display: grid) {
  div {
    display: grid;
  }
}

/* valid when not supported */
@supports not (display: grid) {
  div {
    float: right;
  }
}
```

## 使用

可以用于查看是否支持：

- 特定css属性
- 特定前缀的css属性
- 自定义属性
- css选择器