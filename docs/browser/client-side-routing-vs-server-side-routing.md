# 客户端路由vs服务器端路由





## 解决方案

### Hash

这是因为浏览器不会将hash#之后的内容发送给浏览器

**缺点**

1. url很难看
2. 不支持server side rendering



### catch-all

所有的请求都返回index.html