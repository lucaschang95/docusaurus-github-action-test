# 模块化（modularity）



**问题**

1. 会污染全局变量
2. 模块之间的依赖关系不明显



## 规范

CommonJS，AMD，CMD，ES6 Module这4种规范







## CommonJS

nodejs使用了该规范

#### 三大对象

module，require，exports



#### require

读入并执行一个js文件，返回module.exports对象。如果没有找到该模块，会报错

#### 特点

- 模块可以多次加载，但是只会在第一次加载时运行一次，然后运行结果就被缓存了，之后再加载，就直接读取缓存结果。要想让模块再次运行，必须清楚缓存
- 模块加载的顺序，按照代码中出现的顺序



加载模块是同步的，只有加载完成，才能执行后面的操作



#### module对象

parent，children，



#### module.exports和exports的关系

- 指向同一对象
- 所以给exports赋值时候要**特别小心**，不要让他们指向了不同的对象







## ES6模块与CommmonJS模块的差异

​	

1. CommenJS加载的是一个js对象，ES6模块输出的是接口，一种静态定义
2. CommonJS模块输出的是一个值的拷贝（值类型不会干扰，但是引用类型会的），ES6输出的是值的引用
3. CommonJS模块是运行是加载，ES6模块是编译时输出接口





## 参考文献

- https://zhuanlan.zhihu.com/p/49522035