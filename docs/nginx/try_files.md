# try_files

> recursively check if files exist in a specific order and serve the file located first.

```nginx
location / {
    try_files $uri $uri/ /default/index.html;
}
```

context: server, location

## 用法

Syntax: try_files file ... uri;
try_files file ... =code;
Default: —
Context: server, location

- If none of the files were found, an internal redirect to the uri specified in the last parameter is made.（如果 file 列表没有匹配到，会进行一个 internal redirect)

## 参考

- [https://nginx.org/en/docs/http/ngx_http_core_module.html#try_files](https://nginx.org/en/docs/http/ngx_http_core_module.html#try_files)
