# run

`docker run [OPTIONS] IMAGE [COMMAND] [ARG...]`

`docker run -p 3000:3000 -it koa-demo /bin/bash`

`-p`
pulish a container's ports to the host

## 示例

### 连接到网络

```bash
docker run -itd --network=my-net busybox
```
