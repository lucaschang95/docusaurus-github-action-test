# history

- `window.history`, 可以在不刷新页面前提下改变地址栏中的url地址

## 用法

- `history.length`
- `history.state`: pushState(), replaceState()时传入的state对象

- `history.pushState()`
- `history.replaceState()`
- `history.go()`
- `history.back()`
- `history.forward()`

### pushState( )

- pushState(state, title, url)
- 添加一条历史记录，不刷新页面
- state：一个与该网址相关的状态对象
- title：新页面的标题
- url：新网址，必需与前一个页面处于同一个域
- url可以直接填写path之后的部分

## 事件

**popstate**

**hashchange**