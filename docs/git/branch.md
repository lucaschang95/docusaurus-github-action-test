# branch

> List, create, or delete branches（显示、创建和删除分支）

## syntax

### 查看本地分支

> If --list is given, or if there are no non-option arguments，此时是查看分支

`git branch` 或者 `git branch --list`

- `-r`: remote-tracking branches to be listed
- `-a`: both local and remote branches

`--contains [<commit>]`: 仅显示包含指定提交的分支
`--no-contains [<commit>]`: 不显示包含指定提交的分支
`-u <upstream>`
`--set-upstream-to=<upstream>`: Set up `<branchname>`'s tracking information so `<upstream>`
`--unset-upstream`

### 删除分支

- `git branch -d <branch>`
- `git branch -D <branch>`