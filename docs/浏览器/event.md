# 浏览器事件机制



## 绑定事件

#### html中直接添加

- **syntax**: `<button onclick="foo()">Click</button>`

- 可以在HTML中传入`this`参数, 此时`this`参数指向这个DOM对象 (静态的)
- `event.target`指向目标



#### javascript中事件绑定

- **syntax**: `window.onload = foo()`





#### javascirpt中事件监听

- **syntax**: `element.addEventListener("click", foo(), useCapture)`
  - 对应: `element.removeEventListener(event, function)`

**注: IE是使用`element.attachEvent(event, function)`**



## onload 和 DomContentLoad 事件

- `onload`是页面所有文件加载完成后执行
- `DomContentLoad`是HTML文档加载和解析完成后触发, **不等待样式脚本和图片加载**







## onerror

#### 触发条件

- javascript runtime error
- a resource failed to load



#### 回调函数

- `callback(message, source, lineno, columnno, errorobj) {...}`





## onresize

**配合`window.innerWidth`和`window.innerHeight`**



## DOMContentLoaded, loaded

1. 前者是指html已经被loaded, parsed, without waiting for stylesheets, images, and subframes
2. loaded: fully loaded, 包括所有依赖资源：css, 图片，sub-frame