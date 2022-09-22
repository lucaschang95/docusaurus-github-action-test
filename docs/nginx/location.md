# location

每一次 client request，nginx 都会去决定 which location block handles the request

- A location block lives within a server block (or other location blocks)

## syntax

```nginx
location optional_modifier location_match {

}
```

## location_match location block 是如何进行匹配的？

- (none) prefix match (如果 location_match 之前没有 modifier, 这个 location 会被认为是 prefix match)
- `=` 会被解释为 exactly match
- `~` 会被解释为 case-sensitive regular expression match
- `~*` case-insensitive regular expression match
- `^~` prefix match, 优先级高于 regular expession match

## 匹配规则

match

1. `=` exactly match
2. (none) prefix match
3. 如果匹配到的 location 有`^~`这个modifier，不会进行regular expression match
4. 从上至下进行regular expression match, 匹配到则使用 regular expression match的location，否则使用prefix match的结果

### 正则匹配

## 例子

```nginx
location /site {
  <!-- /site, /site/page1/index.html ... -->
}

location = /page1 {
  <!-- only /page1 -->
}
```

## location 跳转

> 哪些 directive 会造成 location 跳转？

- `index`
- `try_files`
- `rewrite`
- `error_page`

## ref

- [https://www.digitalocean.com/community/tutorials/understanding-nginx-server-and-location-block-selection-algorithms]
