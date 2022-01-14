# CSS引入的方式？

4种，

- external CSS
- internal CSS
- inline CSS



## external CSS

<Link rel="stylesheet" type="text/css" href="style.css">

## internal CSS

html文件，head，style标签中

## inline CSS

直接写到了标签中，如p标签，div标签



## 优先级

1. inline style (inside an HTML element)
2. External and internal style sheets (in the head section)
3. browser default



link与@import的区别

1. 属于不同语法范畴：link是XHTML标签，除了可以加载CSS之外，还可以定义RSS等其他事务。@import属于CSS语法，应该卸载样式表的开头。
2. link是异步？新开线程去拉取资源@import需要网页结构完全载入后加载样式文件（同步？）
3. link属于XHTML语法，兼容性较好，@import属于CSS2.1语法，低版本浏览器不支持