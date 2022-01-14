# Narrow 类型缩小





## ts通过什么进行类型缩小？

- typeof
- if else if else
- switch
- 真值校验
- 强等和弱等
- in 操作符
- instance of
- 第一次赋值时候 let a = x ? '1' : 1
  - a的type就是 number | string



