# location

## syntax

```nginx
location optional_modifier location_match {

}
```

## location_match

- (none) prefix match
- `=` exactly match
- `~` case-sensitive regular expression match
- `~*` case-insensitive regular expression match
- `^~` prefix match, 优先级高于

## 匹配规则

match

1. `=` exactly match
2. (none) prefix match
3. 如果匹配到的 location 有`^~`这个modifier，不会进行regular expression match
4. 从上至下进行regular expression match, 匹配到则使用 regular expression match的location，否则使用prefix match的结果

### 正则匹配


## ref

- [https://www.digitalocean.com/community/tutorials/understanding-nginx-server-and-location-block-selection-algorithms]