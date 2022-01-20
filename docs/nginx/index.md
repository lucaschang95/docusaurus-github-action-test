# nginx

`nginx -v`

`nginx -s signal`

signal can be:

- `stop`
- `quit`
- `reload`
- `reopen`


events, http, server, location

- server in http, location in server


## 处理流程

1. 不同的server block按照监听的port和server name进行区分
2. master process 决定哪个 server block 来处理请求
3. 使用URI去匹配location