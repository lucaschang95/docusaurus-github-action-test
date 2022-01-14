

# reset

git reset --soft

- 仅覆盖本地版本库

git reset --mixed

- 版本库、暂存区、工作区

git reset --hard

- 版本库、暂存区、工作区全覆盖



配合reflog, 找回误删的内容

- reglog 找到commit
- git reset --hard <commit>

## ref

- https://blog.csdn.net/qq_32452623/article/details/79521461