# CORS

> CORS(Cross-Origin Resource Sharing) determines whether browsers block frontend JavaScript code from accessing responses for cross-origin requests

- 浏览器同源策略，限制`XMLHttpRequest`和`Fetch API`, 保障用户安全
- CORS需要在可用性和安全性中间寻找平衡点
- 只是限制ajax

## 哪些请求会应用CORS?

1. `XMLHttpRequest` 和 `Fetch API`
2. ...

## 如何判断两个网站为同源网站

- 协议(schema), 主机(domain), 端口(port)相同才为同源

## 非同源的限制

- Cookie, LocalStorage 和 IndexDB无法读取
- DOM无法获得
- AJAX请求不能发送

- 可用性
  - 带有src的属性标签的可以跨域访问
  - 跨域写操作: 表单提交, 重定向请求

## 简单请求`(simple request and )`

simple request don't trigger a CORS preflight request

简单请求需满足:

- 请求方法：`GET` `HEAD` `POST`
- 仅能使用CORS安全的头部: `Accept`, `Accept-Language`, `Content-Language`, `Content-Type` (内容协商的头部)
- Content-Type的值只能是 text/plain, muiltipart/form-data, application
- 无`xhr.upload.addEventListener()`

发送时额外携带 **Origin**, 返回时额外携带 **Access-Control-Allow-Origin**

简单请求的跨域访问

- 浏览器构造HTTP请求中携带`Origin`头部告知server来自哪个域
- server响应中携带`Access-Control-Allow-Origin`头部告知表示允许哪些域
- 浏览器放行

## 预检请求 (preflighted request)

- 预检请求:
  - 方法: option
  - **Origin**
  - **Access-Control-Request-Method**
- **Access-Control-Request-Header**
- 预检请求响应:
  - **Access-Control-Allow-Origin**
  - **Access-Control-Allow-Method**
  - **Access-Control-Allow-Headers**
  - **Access-Control-Expose-Headers**    哪些响应头部可以供客户端使用
  - **Access-Control-Allow-Credentials** 告知浏览器是否可以将 **Credentials** 暴露给客户端使用 
- 正式请求:
  - 方法变为了用于ajax的方法, 众多头部也都在
  - 同时, 复杂请求其他的头部也都会加上