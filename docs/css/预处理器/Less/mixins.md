# Mixins 混入

> 混入只会混入根元素, 不会混入子元素 (如果有子元素, 则会以 Descendant combinator 等方式混入子元素)

- Mixins are common rule-sets you define and can use them in any other rule-sets (Mixin 是您定义的通用规则集，可以在任何其他规则集中使用它们)

```less
.a, #b {
  color: red;
}
.mixin-class {
  .a();
}
.mixin-id {
  #b();
}
```

```css
.a, #b {
  color: red;
}

.mixin-class {
  color: red;
}

.mixin-id {
  color: red;
}
```

```less
.b(@size, @height) {
  font-size: @size;
  height: @height;
}

.e {
  .b(50px, 5px);
}
```
