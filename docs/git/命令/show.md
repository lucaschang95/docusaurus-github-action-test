# show

> show various types of objects

可以展示的 object: blobs, trees, tags and commits

## 语法

`git show [<options>] [<object>...]`

- 可以展示 blobs, trees, tags, commits

## 应用场景

```bash
git show ${commitHash} # 展示某个 commit 引入的改动
git show ${branch} # 展示某个 branch 最新的 commit
git show ${tag} # 展示某个 tag 引入的改动
```
