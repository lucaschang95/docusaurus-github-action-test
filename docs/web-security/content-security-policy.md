# Content security policy 内容安全策略

- 开发者对自己应用声明资源加载白名单
- 客户端运行web应用对外部资源加载做出筛选和识别



- 基本后向兼容
- 需要浏览器支持csp功能



## 启用

- 需要server配合，返回html文件时带上Cotent-Security-Policy这个header
- 或者html的meta标签





## csp语法

- default-src, img-src, script-src, media-src, style-src, font-src, frame-src,

- * 全部允许加载, 'none', 'self', data(base64编码过的图片)， test.com, *.test.com, https:



## 上报