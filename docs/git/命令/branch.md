# branch

> List, create, or delete branches（显示、创建和删除分支）

## 查看本地分支

> If --list is given, or if there are no non-option arguments，此时是查看分支

`git branch` 或者 `git branch --list`

- `-r`: remote-tracking branches to be listed
- `-a`: both local and remote branches

`--contains [<commit>]`: 仅显示包含指定提交的分支
`--no-contains [<commit>]`: 不显示包含指定提交的分支
`-u <upstream>`
`-u <remote>/<branch>`
`--set-upstream-to=<upstream>`: Set up `<branchname>`'s tracking information so `<upstream>`
`--unset-upstream`
`--track`

## 创建分支

`git branch <branchname>`: 创建分支

creates a new branch head named `<branchname>` which points to the current HEAD

## 删除分支

- `git branch -d <branchname>`
- `git branch -D <branchname>`

## 设置远程 track 分支

`git branch -u <remote>/<branch>`: 当前分支 track 到远程分支