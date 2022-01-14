# JSX

1. react不需要使用jsx，但是一般人们会将他们组合使用。
2. jsx代码需要经过babel转换，转化为createElement函数执行操作。
3. jsx可以作为值进行传递（他实际上就是React.createElement()）,代表的其实是一个object
4. 使用单括号包裹JavaScript表达式: 属性，文本
5. 防止xss：React DOM渲染时候会将文本先转义



## react element

使用babel可以将jsx转换为react element，react通过react element构建虚拟DOM



