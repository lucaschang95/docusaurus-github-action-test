# server

defines a virtual server used to handle requests of a defined type

## server的match

通过 listen directive进行匹配

- default ip: 0.0.0.0
- default port: 80

规则

- port：必须匹配
- ip：specific port 优先级大于 0.0.0.0 (0.0.0.0 可以 match any interface)
- 如果有相同 specificity 的多个server block, 对 server_name 进行匹配

## server_name 如何进行匹配？

> 请求的 HOST header 和 server block 的 server_name 进行匹配

- exact match
- leading wildcard(`*.douyin.com`) with longest match
- trailing wildcard
- regular expression (indicated by a ~ before the name)
- default server block

## ref

- [https://www.digitalocean.com/community/tutorials/understanding-nginx-server-and-location-block-selection-algorithms]
