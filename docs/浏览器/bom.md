# BOM

> 浏览器对象模型, Browser Object Model 的缩写

## 内容

- `navigator`: 客户端浏览器的信息。
- `history`: 历史记录
- `location`: 当前 URL 的信息。
- `screen`: 包含客户端显示屏的信息。

## Location

Location 对象包含有关当前 URL 的信息。

| 属性     | 描述                                         |
| -------- | -------------------------------------------- |
| hash     | 设置或返回从井号 (#) 开始的 URL（锚） 。     |
| host     | 设置或返回主机名和当前 URL 的端口号。        |
| hostname | 设置或返回当前 URL 的主机名。                |
| href     | 设置或返回完整的 URL。                       |
| pathname | 设置或返回当前 URL 的路径部分。              |
| port     | 设置或返回当前 URL 的端口号。                |
| protocol | 设置或返回当前 URL 的协议。                  |
| search   | 置或返回从问号 (?) 开始的 URL（查询部分） 。 |

| 方法            | 描述                                                            |
| --------------- | --------------------------------------------------------------- |
| assign()        | 加载新的文档。                                                  |
| reload(‘force’) | 重新加载当前文档。参数可选，不填或填 false 则取浏览器缓存的文档 |
| replace()       | 用新的文档替换当前文档。                                        |

## history对象

```javascript
back()
forward()
go()
pushState()
replaceState()
```

## Navigator

- **userAgent**: 浏览器信息
- **language**: 用户浏览器所用语言
- **languages**: 偏爱语言

## 弹出框

**警告框, 确认框, 提示框**

- `alert(text)`
- `confirm(text)` 返回boolean
- `prompt(text)` 可能返回`null`

## 定时事件

- `setTimeout(function, miliseconds)`
- `clearTimeout(timeoutVariable)`
- `setInterval(function, miliseconds)`
- `clearInterval(intervalVariable)`

## cookie

#### 添加cookie

- document.cookie = 'username=Bill Gates';
- 可以设置`expires`和`path`

## Ref

https://www.w3school.com.cn/htmldom/index.asp