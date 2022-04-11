# restore

> Restore specified paths in the working tree with some contents from a restore source. If a path is tracked but does not exist in the restore source, it will be removed to match the source.

从一个 restore source 中恢复选定的文件内容

## syntax

- 没有`--staged`时，恢复 working tree 内容
  - 默认从 index (staging area) 中恢复
- 有`--staged`时，恢复 staging area 内容
  - `--worktree`: 顺便恢复 working tree 内容
- `--source=` 来指明从哪个 commit 中恢复
