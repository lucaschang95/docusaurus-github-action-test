# BEM命名规范

CSS BEM命名规范

并不是所有的css都适合使用BEM，全局的css样式没必要使用

## 规范

```css
.block {} 高级别的组件

.block__element {} 低级别的组件

.block--modifier {} 组件的的不同状态、不同版本
```

- BEM：块 block, 元素 element, 修饰符 modifier
- .block-name__element-name--modifier-name

使用两个__或者--是为了避免冲突

## 缺点

- 可读性较差
- 维护不太容易

## 使用

- 一个大模块可以使用BEM来定义class