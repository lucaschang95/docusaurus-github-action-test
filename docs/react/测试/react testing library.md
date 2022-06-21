# react testing library

> npm 包: @testing-library/react

## RTL 提供了哪些正交的功能？

1. render react component
2. screen debug, `screen.debug()`
3. selecting element

## 选择元素

<!-- expect(screen.getByText("Search:")).toBeInTheDocument(); -->

```js
<label
  for="search"
>
  Search:
</label>
```

screen.getByText("Search:") // 查找文本为 "Search:" 的元素，会将上面那个元素找出来

除了 `getByText` 还有 `getByRole`

除了 `getBy` 还有 `queryBy` 和 `findBy`

- `getBy` 找不到会报错，想要找不到的话，可以使用 `queryBy`

## fire event

We can use RTL's fireEvent function to simulate interactions of an end user.

- userEvent 优先于 fireEvent 