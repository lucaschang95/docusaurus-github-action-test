# checkout

> Switch branches or restore working tree files，切换、检出分支，恢复 working tree 文件

过程：

- 更新特定文件，使得这些文件和 index / 某个 commit 的文件一样
- 如果没有 pathspec, 也会更新 HEAD 引用

`git checkout <branch>`

`git checkout -b <branch> --track <remote>/<branch>`

新建一个分支，并且 track 远程分支

## 用法

```bash
git checkout [<branch>]
```

prepare for working on `<branch>`

- update index and working tree to `<branch>`
- pointing `HEAD` to `<branch>`

```bash
# 如果本地分支不存在，等同于
git checkout -b <branch> --track <remote>/<branch>
```

```bash
git checkout --detach [<branch>]
git checkout [--detach] [<commit>]
```

- 进入 detached head 模式
- 这个时候 working tree 的内容是 commit 的内容 + local modification
- 使用 `-m` flag 进入 merge 界面

## checkout 和 reset 的区别？

- 侧重点不同
  - checkout 侧重于切换分支，修改 working tree 中的内容
  - reset 侧重于修改 `HEAD` 指针的指向，同时 optionally 修改 working tree 和 index 的内容
