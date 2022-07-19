# whistle

## 匹配模式

1. 域名匹配: 匹配整个 domain
2. 路径匹配: 匹配 specific domain + specific path
3. 正则匹配: 支持两种模式：/reg/、/reg/i 忽略大小写
4. 精确匹配: `$url operatorURI`
5. 通配符匹配: 通配符匹配，通配域名匹配、通配路径匹配, 必须以 `^` 开头

## 通配符匹配

`protocol://domain/path?query#hash`