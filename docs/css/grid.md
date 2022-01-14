# grid布局

- 二维布局
- 浏览器支持不如flexbox好
- display: grid
- cell之间可以重叠，使用z-index来控制顺序



## gap

- 长度单位
- gap: 10px;
- 先是row-gap，后是column-gap

## column-gap

## row-gap

## grid-template-columns

- grid-template-columns: 1fr 1fr 1fr
- 可以后接无数的值
- grid-template-columns: repeat(3, 1fr)

## grid-auto-rows

- grid-auto-rows: 200px;
- grid-auto-rows: minmax

## grid line

- grid小块的分界线

## 设置每个小块的位置

grid-column-start: 1

grid-column-end: 4

grid-row-start: 1

grid-column-end: 3

## implicit grid/ explicit grid

- idk

## fr

- 新单位，代表fraction，分几份