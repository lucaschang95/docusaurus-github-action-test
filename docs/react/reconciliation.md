# 调和算法（reconciliation）

对旧fiber节点和新reactElement进行比较，判定旧fiber节点是否可以复用，生成新的fiber子节点。



- 复杂度：O(n)
- 启发式算法，基于的两个假设：
  - two elements of different types will produce different trees. 两个不同类型的元素一定会形成两个不同的树
  - The developer can hint at which child elements may be stable across different renders with a key prop. 开发者指明了在UI更新中，哪两个元素可能是相同的。



主要作用

1. 设置fiber.flags(Placement, Deletion)
2. 

## Diffing Algorithm

- 首先比较根元素
- 元素种类不同
  - 直接替换DOM
  - 子元素一并进行替换
- 元素类型相同
  - 修改变化的属性
  - （类组件，state不会变，state is maintained across renders，而props则由react负责修改）
  - 递归的对子元素进行比较

列表处理

- key属性
  - 简单来说，key值决定了哪两个元素进行比较