# Cookie

- 解决http无状态的协议的情况
- 服务器通过设置`SetCookie`这个响应头部, 将cookie信息返回给浏览器, 浏览器将cookie信息保存在本地. 当下次向同一服务器发起HTTP请求时, 浏览器会自动将cookie信息放到请求头部中.

## 用途

1. session management
2. personalization
3. tracking

## 特征

- 大小: 4KB以内
- 区分大小写
- Cookie 头部可以存放多个 name/value 键值对
- Set-Cookie 腿部一次只能传递一个 name/value 键值对

## Cookie属性

> 除了 name/value 外，cookie 还支持以下属性

- `Domain`:
  - If specified, subdomains are always included
  - If unspecified, the attribute defaults to the same host that set the cookie, excluding subdomains.
- `Path`:
  - 能匹配到即可, subpath也包括
  - 默认是都有
- `Expires`
  - expire
- `Max-Age`
  - 秒为单位，优先级高于Expires
- `Secure`: 只能通过HTTPS发送
- `HttpOnly`
  - 开启后, 无法使用JavaScript访问 （document.cookie, XMLHttpRequest, Request APIs）
- `SameSite`
  - 开启后, 跨域请求不发送cookie
  - 可能会造成不好的用户体验
  - `strict`
    - 跨站cookie都不发送
  - `lax`
    - 导航到第三方get请求可以 (链接 预加载 get表单)
  - none
    - 同域，跨域请求都会发送该cookie
    - cookie必须携带 secure

## 第三方 Cookie

> 浏览器允许对于不安全域下资源（如广告图片）响应中的 Set-Cookie 保存，并在后续访问该域是自动添加 Cookie

- 用户踪迹信息的收集

## `document.cookie`

1. Read all cookies accessible from this location

`allCookies = document.cookie;`

2. 