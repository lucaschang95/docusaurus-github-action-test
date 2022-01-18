# Docker

lightweight轻量级的（相比于虚拟机）

separate your application from your infrastructure

## 基本概念

镜像（image），容器（container），仓库

## 基本操作

获取镜像，查看镜像列表，删除镜像，

启动容器实例，重启，停止（kill），

## 创建image文件

docker image build -t koa-demo:0.0.1 .

- 点表示dockerfile路径

### 生成容器



#### 启动容器

docker container run --rm -p 8000:3000 -it koa-demo /bin/bash

`-rm`: 容器终止运行之后自动删除容器文件

docker container start

用来启动已经生成


#### 终止容器

`docker container kill [containerId]`

`docker container stop [containerId]`

gracefully

#### 进入容器

`docker container exec -it [containerID] /bin/bash`