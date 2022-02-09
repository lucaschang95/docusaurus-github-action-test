# History

> 更自由的去管理会话历史

## ActionType

- `POP`: `popState`事件, 包括history.go(), history.back(), history,forward(), 浏览器返回键，前进键
- `PUSH`: histroy.push()
- `REPLACE`: history.replace()

其中第一种是'active entry'的跳转，第二三种是'active entry'的新增

## block功能