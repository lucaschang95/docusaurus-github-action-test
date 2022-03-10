# history对象

- 可以在不刷新页面前提下改变地址栏中的url地址
- 挂载在window下

## api

### length

- 历史记录中页面总数

### back( )

### forward( )

### go(index)

- 决定后退几步还是前进几步

### pushState( )

- pushState(state, title, url)
- 添加一条历史记录，不刷新页面
- state：一个与该网址相关的状态对象
- title：新页面的标题
- url：新网址，必需与前一个页面处于同一个域
- url可以直接填写path之后的部分

### replaceState( )



## 事件

**popstate**

**hashchange**