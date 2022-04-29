# supports

> The @supports CSS at-rule lets you specify declarations that depend on a browser's support for one or more specific CSS features. This is called a feature query.

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