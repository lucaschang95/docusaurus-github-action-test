# restore

> Restore specified paths in the working tree with some contents from a restore source (从一个 restore source 中恢复选定的文件内容)

## 用法

- 没有`--staged`时，恢复 working tree 内容
  - 默认从 index (staging area) 中恢复
- 有`--staged`时，恢复 staging area 内容
  - `--worktree`: 顺便恢复 working tree 内容
- `--source=` 来指明从哪个 commit 中恢复

## restore source

- 如果没有指定，则默认是 HEAD / index
- 制定后, 可以是 commit
