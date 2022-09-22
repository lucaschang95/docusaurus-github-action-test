# directive

## proxy_pass

转发

`proxy_pass {protocal}{host}{port}`

`proxy_pass http://localhost:8080`

## try_files

```nginx
location ~ \.(jpe?g|png|gif|ico|html)$ {
    root   /usr/share/nginx/html;
    try_files /index1.html = 404;
}
```
