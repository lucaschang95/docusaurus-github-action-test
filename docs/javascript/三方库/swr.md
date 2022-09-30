# swr

## 定位

XMLHttpRequest / Fetch / Axios 上层的库

- XMLHttpRequest / Fetch / Axios 的角色的 fetcher，负责执行请求
- swr 在其之上，负责 server 资源的缓存，自动重试，自动更新

## 中间件

修改 key, fetcher, config 对象

## 如何设计一个 query client?

- 在 swr 看来，Axios 仅仅是一个 fetcher

## swr 承担的功能

1. 全局标识 server 资源，并统一做缓存
2. 自动重试，自动更新 （需要配置 config）
