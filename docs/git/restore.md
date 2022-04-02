# restore

> Restore specified paths in the working tree with some contents from a restore source. If a path is tracked but does not exist in the restore source, it will be removed to match the source.

从一个 restore source 中恢复选定的文件内容

## syntax

### 放弃工作区中的修改

`git restore`

- 没有 `--staged` 这个选项默认从 index 中恢复

### 放弃暂存区中的修改，工作区不变

`git restore --staged --worktree`

- 放弃暂存区中的修改1
- 工作区不变
- 相当于取消了git add .

- 使用 `--source=` 来制定从某一个 commit 中恢复
