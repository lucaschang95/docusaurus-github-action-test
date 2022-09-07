# data

By default all files created inside a container are stored on a writable container layer

docker 提供了两种模式将文件存在 host machine 上面：volumes, and bind mounts.

## use cases

- 多个 container 中分享 data
- backup data from one container to another

## volumns 和 bind mount 的区别？

- volumns 的位置由 docker 来指定
- volumns 完全和 host 的文件系统所隔离
