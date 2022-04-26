# 层叠上下文 (stacking context) 和 z-index

> 控制 overlapping 的行为

## 层叠顺序

无 z-index 时(bottom -> top)

1. 根元素的 background, border
2. 非定位元素 (non-positioned blocks), 按照出现顺序 (in order of appearance)
3. float 元素
4. 定位元素 (positioned elements), 按照出现顺序

z-index

- 仅在定位元素 (positioned element) 上有效果
- 无 `z-index` 属性时, 元素被渲染到默认层 layer 0 (zero)上

存在 z-index 时(top -> bottom): 按照 z-index 来

## 如何产生新的层叠上下文

- 根元素 (`<html>`)
- `position`: `absolute`/`relative`, `z-index` !== `auto`
- `position`: `fixed`/`sticky`
- child of a flex/grid container, z-index !== 0
- `opacity` 不为 1
- transform, filter, perspective

## 结论

- 如果两个元素在同一个层叠上下文, 使用**层叠顺序**判断
- 如果不在, 先判断所在层叠上下文的顺序
- 相同, 后面的覆盖前面的

## 参考

- [https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index)