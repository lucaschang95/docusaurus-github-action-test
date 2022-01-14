# Flexbox （避免与flex混淆）



flex影响

- items的排列
- items在主轴和交叉轴上的大小（flex属性，align-items属性）



**开启: `display: flex`** 或者 **`inline-flex`**

- 主轴和交叉轴，默认主轴为row

## 默认属性

- 按行排列, 不会伸长, 但会缩短, 纵向会伸长



## flex-direction

- 可选值：row, row-reverse，column，column-reverse

**默认是row**

#### `flex-wrap`

**决定是否会换行显示**

`nowrap`, `wrap`, `wrap-reverse`



#### `flex-flow`

**他是`flex-direction`和`flex-wrap`的简写方式**



## justify-content (控制主轴上的行为)

- 可选值：start，center，space-between，space-around, space-evenly



## align-items (控制交叉轴上的行为)

stretch, center, start, end

**可以被align-self改写**



## order

缺省值为0，修改其大小可以改变出现顺序





## flex属性

- 可以理解为瓜分剩余空间（available space）
- 必需先理解min-con

- 由flex-basis，flex-grow，flex-shrink组成

**flex-grow**：缩小时，它缩小的比例

**flex-shrink**：在扩大缩小之前，这个flex对象应该是多大

**flex-basis**：扩大时，它扩大的比例

- auto：找到每个flex item的max-content作为flex-basis，然后剩余空间平均分配
- 0：设置为0的时候，代表完全忽略每个对象的flex-basis，直接进行分配
- 否则将content大小设置为flex-basis





**flex增长收缩行为受到对象min-content影响**



## flex-basis

- 确定每个items的initial size 
- 覆盖item本身的size (width和height)

auto的时候

- 先看有无被设定绝对值（如 width: 200px）
- 否则，取max-content作为其flex-basis

0的时候

- 完全忽视item的大小，根据flex-grow进行分配



## flex-shrink

- 在container长度不够的时候，拿掉空间，使得overflow不会出现（aking away space to make boxes fit into their container without overflowing.）
- 缩小的时候，**flex-shrink大小乘以flex-basis，才是最终的shrink系数** （防止小item变为0，大item还没怎么变）
- shrink时候，item宽度不会小于其min-content

0的时候

- 不会缩小，因此会出现overflow



## 如何确定item的size

### 确定item的flex-basis

- flex-basis为auto，且设置的width set，则使用该值
- flex-basis为auto和content，使用content的max-content值
- flex-basis值为length unit，则使用该值
- flex-basis值为0，则不考虑item的size，直接进行分配

### 是否还有剩余空间

- item的flex-basis值相加，如果小于container的长度，则考虑flex-grow
- 如果大于container的长度，则考虑flex-shrink



## ref

- https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox
- https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax