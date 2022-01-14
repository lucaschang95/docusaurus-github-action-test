# Portal

一般，react会根据虚拟DOM中位置渲染元素，当你需要在其他地方渲染，比如某一个DOM元素之下渲染的话，可以使用



## 方法

render函数中，返回

ReactDOM,createPortal(

​	this.props.children,

​	domNode

)



domNode使用document的api得到