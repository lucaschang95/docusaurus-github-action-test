# server

## server的match

通过 listen directive进行匹配

- default ip: 0.0.0.0
- default port: 80

规则

- 首先对ip进行匹配
- 之后对port进行匹配
- 最后对server_name进行匹配


## ref

- [https://www.digitalocean.com/community/tutorials/understanding-nginx-server-and-location-block-selection-algorithms]