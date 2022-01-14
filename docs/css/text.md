# Text





## word-break, word-wrap, white-space如何处理？

- 空格, 多个空格,  `&nbsp;`, `<br>`, html中的换行



## white-space

- 处理white space时候的行为
- 控制空白字符显示



- normal: 
- nowrap: 从不换行，除非br
- pre: preserve的缩写
- pre-wrap: preserve基础上换行
- preline



## work-break

- normal: 
- break-all:所有单词碰到边界一律拆分换行
- keep-all: 所有“单词”一律不拆分换行
- 单词定义：英文单词，连续的中文字符



## word-wrap

- word-break的补充



## color



> font-family

- web safe font
    - Arial, Courier New, Georgia, Times New Roman
- font-family: "Trebuchet MS", Verdana, sans-serif;
- font stack: CSS engine 会一次选择合适的字体填进去
- surrouunded by quotes


> font-size

- units
    - px, em, rem


> font-style
- normal, italic, oblique


> font-weight
- normal bold, 100-900


> text-transform
- none, uppercase, lowercase, capitalize, full-width


> text-decoration
- none, underline, overline, line-throught


> text-shadow



### Text Layout

> text-align
- left, right, center, justify


> line height
- px, em, rem
- unitless (multiply by font-size)


> letter-spacing, word-spacing







## text-overflow

- ellipsis



### List

> `list-style-type`
选择bullet的形状, none, square...各种


> `list-style-image`


> `list-style-position`
inside, outside: 是指bullet是放在content area内部还是外部