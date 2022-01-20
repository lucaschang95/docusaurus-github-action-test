# upstream

a group of server, 通过proxy_pass转发到该upstream



```nginx
upstream backend {
    server backend1.example.com weight=5;
    server backend2.example.com;
    server 192.0.0.1 backup;
}
server {
    location / {
        proxy_pass http://backend;
    }
}
```