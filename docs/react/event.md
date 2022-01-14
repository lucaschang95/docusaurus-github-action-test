# Event



## 写法

**与html中事件的写法不同**



#### HTML中

- `onclick` **全小写**



#### React中

- `onClick` **camelCase**
- 必须显示的声明e.preventDefault();
- 类组件中，必须显式的绑定this，这样函数才能成为类实例的method（这个是JavaScript的特性决定的）



## 合成事件 (synthetic event)

**由于React中的事件采用的是合成事件, 无法以异步方式访问事件对象**





## bind `this`

**使用想在事件回调函数中**