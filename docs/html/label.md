# `<label>`

> The `<label>` element represents a caption for an item in a user interface

示例代码

```html
<label for="name">Name</label>
<input id="name" type="text" name="name">
```

## 关联 `<label>` 和 `<input>`

1. input 添加 id 属性，label 添加 for 属性
2. 嵌套

```html
<label for="username">Enter your username:</label>
  <input id="username">
<label for="username">Forgot your username?</label>

<label>Do you like peas?
  <input type="checkbox" name="peas">
</label>
```

优点

1. a screen reader will read out the label when the user is focused on the form input
2. When a user clicks or touches/taps a label, the browser passes the focus to its associated input (increased hit area )

Elements that can be associated with a `<label>` element include `<button>`, `<input>` (except for type="hidden"), `<meter>`, `<output>`, `<progress>`, `<select>` and `<textarea>`.

