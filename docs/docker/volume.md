# volume

## docker 操作 volume

```bash
docker volume create volumn-name
docker volume ls
```

## Named Volumes Bind Mounts

my-volume:/usr/local/data /path/to/data:/usr/local/data

-v "$(pwd):/app" - bind mount the current directory from the host in the container into the /app directory

## bind mount

> 可以本地 dev 开发时候使用

`-v "$(pwd):/app"`
