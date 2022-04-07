# restore

> Restore specified paths in the working tree with some contents from a restore source. If a path is tracked but does not exist in the restore source, it will be removed to match the source.

从一个 restore source 中恢复选定的文件内容

## syntax

- 没有`--staged`时，恢复 working tree 内容
  - 默认从 index (staging area) 中恢复
- 有`--staged`时

### 放弃暂存区中的修改，工作区不变

`git restore --staged --worktree`

- 放弃暂存区中的修改1
- 工作区不变
- 相当于取消了git add .

- 使用 `--source=` 来制定从某一个 commit 中恢复
