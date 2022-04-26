# add

> add file contents to the index (from working tree to index/staging area)

## options

### `<pathspec>`

- `git add -A`
- `git add .`
- `git add *.js`
- `git add ./*.js`

## 案例解析

```shell
# src 目录下的所有 js 文件 (不包括子目录)
git add src/*.js 

# src 目录下的所有 js 文件 (包括子目录)
git add src/\*.js 
```
