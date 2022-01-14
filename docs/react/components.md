# Components

组件使得UI分割成为独立、可重复使用的小模块。



**组件其实就是一个函数**，接收输入（props），输出react element（或者JSX），从而实现数据到视图的映射。



react中，组件必须**以大写开头**。



**All React components must act like pure functions with respect to their props.**



react是通过setState来控制ui的重新渲染



vue则是响应式的，通过对象劫持，当对象属性改变时，通知相应ui进行改变。



setState可以接收一个object也可以接收一个function，function的时候，入参就是state，props





## Controlled Components 受控组件

通过value和onChange来控制



## props.children

外部：在tag中间增加children

内部：使用props.children来插入children元素

可以被其它props代替