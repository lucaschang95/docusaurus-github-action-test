# add

> add file contents to the index (from working tree to index/staging area)

## options


## 案例解析

```shell
# 所有文件
git add -A
git add .

# src 目录下的所有 js 文件 (不包括子目录)
git add src/*.js 

# src 目录下的所有 js 文件 (包括子目录)
git add src/\*.js 
```
