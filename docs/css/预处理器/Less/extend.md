# extend

> Extend 是一个 Less 伪类，它将它所放置的选择器与匹配它所引用的选择器合并

Extend works in a very similar way as OOP works. You define a parent rule-set and you establish a chain of inheritance to inherit the same style

Extend 的工作方式与 OOP 的工作方式非常相似。 您定义一个父规则集并建立一个继承链来继承相同的样式

```less
.a:extend(.b .c) {};
```

此时, `.a` 将包含 `.b .c` 的所有样式