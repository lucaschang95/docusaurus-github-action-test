# stacking context 层叠上下文

## 如何产生新的层叠上下文

- root element(<html>)
- position: absolute/relative, z-index !== 0
- position: fixed/sticky
- child of a flex/grid container, z-index !== 0
- opacity, transform, filter, perspective

## 无z-index情况下的层叠上下文

following order(bottom -> top)

1. background, border of the root element
2. non-positioned blocked, in order of appearance
3. positioned elements

## z-index

- `z-index`仅在定位元素上有效果 (position不为static)

## 层叠顺序

**用来判断在同一个层叠上下文中的层叠顺序**

- 层叠上下文(border/background) 
- 负`z-index`
- `block`块状盒子
- `float`盒子
- `inline/inline-block`盒子
- z-index: auto / z-indez: 0
- 正z-index

## 结论

- 如果两个元素在同一个层叠上下文, 使用**层叠顺序**判断
- 如果不在, 先判断所在层叠上下文的顺序
- 相同, 后面的覆盖前面的

- https://juejin.im/post/6844903667175260174