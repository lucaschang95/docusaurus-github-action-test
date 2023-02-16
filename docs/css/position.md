# Position

**position的四个值：static，relative，absolute，fixed**

绝对定位：absolute和fixed统称为绝对定位

相对定位：relative

默认值：static

## static

放到文档流中该出现的位置

## relative

相对于原来位置移动，元素仍然处于文档流中，不影响其他元素的位置

- z-index 不是 auto 的时候，会创建一个新的 stacking context

## absolute

- 从 normal document flow 中移除
- z-index 不是 auto 的时候，会创建一个新的 stacking context

分类：只设置 **position: absolute** 和 **同时设置了偏移量**

relative to its closest positioned ancestor

- 只设置 **position: absolute**
  - 影响后面的
- **同时设置了偏移量**
  - 还会影响自己

## Types of positioning

### A positioned element 
is an element whose computed position value is either relative, absolute, fixed, or sticky. (In other words, it's anything except static.)

### A relatively positioned element
is an element whose computed position value is relative. The top and bottom properties specify the vertical offset from its normal position; the left and right properties specify the horizontal offset.

### An absolutely positioned element
is an element whose computed position value is absolute or fixed. The top, right, bottom, and left properties specify offsets from the edges of the element's containing block. (The containing block is the ancestor relative to which the element is positioned.) If the element has margins, they are added to the offset. The element establishes a new block formatting context (BFC) for its contents.

### A stickily positioned element
is an element whose computed position value is sticky. It's treated as relatively positioned until its containing block crosses a specified threshold (such as setting top to value other than auto) within its flow root (or the container it scrolls within), at which point it is treated as "stuck" until meeting the opposite edge of its containing block.
