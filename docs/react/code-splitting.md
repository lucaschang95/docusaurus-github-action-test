# React lazy



动态引入：import().then





## 语法

const OtherComponent = React.lazy(() => import('./OtherComponent'));

然后该组件必须在suspense中使用

suspense中可以有个fallback



## Route-based code splitting



