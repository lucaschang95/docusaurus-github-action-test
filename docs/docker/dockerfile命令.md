# dockerfile

> A Dockerfile is simply a text-based script of instructions that is used to create a container image

> Docker can build images automatically by reading the instructions from a Dockerfile. A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image. Using docker build users can create an automated build that executes several command-line instructions in succession.

## 语法格式

```bash
# Comment
INSTRUCTION arguments
```

- 依次执行
- 必须以`FROM`开头

## FROM

- 定义了 `Parent Image` from which you are building

```dockerfile
FROM [--platform=<platform>] <image>[:<tag>] [AS <name>]
```

## ENV

- 设置环境变量

```dockerfile
FROM busybox
ENV FOO=/bar
WORKDIR ${FOO}   # WORKDIR /bar
ADD . $FOO       # ADD . /bar
COPY \$FOO /quux # COPY $FOO /quux
```

## COPY

`COPY <src> <dest>`

## RUN

`RUN <command>`
`RUN ["executable", "param1", "param2"]`

- will create a new layer on top of the current image and commit the results

## LABEL

add metadata

## EXPOSE

t functions as a type of documentation between the person who builds the image and the person who runs the container, about which ports are intended to be published.

## ENTRYPOINT

> configure a container that will run as an executable.

```docker
ENTRYPOINT ["executable", "param1", "param2"]
```

- docker run 的时候就会帮你跑这个 entrypoint 对应的指令
  - docker run 的参数会帮你 append 到 entrypoint 这个指令后面

## WORKDIR

WORKDIR /a
WORKDIR b
WORKDIR c
RUN pwd

## 参考文献

- [https://docs.docker.com/engine/reference/builder/](https://docs.docker.com/engine/reference/builder/)
