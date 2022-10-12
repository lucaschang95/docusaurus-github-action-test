# network

container 之间的 networking

> If two containers are on the same network, they can talk to each other. If they aren't, they can't.

## Create the network

docker network create todo-app

## network 有几种模式？

- bridge: （默认）模式，when your applications run in standalone containers that need to communicate
- host: remove network isolation, use host network directly.
- disable: 完全禁止 networking

## bridge

A bridge can be a hardware device or a software device running within a host machine’s kernel.

- 连接到同一个 network 的 containers 可以互相通信
- 不同 network 下面的 containers 不可以直接通信
  - 只能在 os 层面通过修改 iptables 来实现

## 连接 container 到 network

```bash
docker network connect [OPTIONS] NETWORK CONTAINER
```

## 断开连接

```bash
docker network disconnect [OPTIONS] NETWORK CONTAINER
```
