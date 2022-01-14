# white-space

sets how white space inside an element is handled



## 考虑的三个问题

- 多个空格是否保留
- 回车是否保留
- 超过div空间，要不要自动换行（将空格转为换行）



normal

合并空格，按需broken line（变为换行）



nowrap

永不换行，不要按需broken line（变为换行）



pre

保留多个空格，换行

不要帮我按需broken line（变为换行）

- 容易超出div空间

