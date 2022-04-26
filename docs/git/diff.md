# git diff

show changes between commits, commit and working tree, etc

## 工作区 (working tree) 和暂存区 (staging area)

`git diff [<options>] [--] [<path>…​]`

## 暂存区 (staging area) 和commit之间的差异

`git diff [<options>] --cached [--merge-base] [<commit>] [--] [<path>…​]`

- `--cached`
- 如果没有指定commit, 则默认是`HEAD`

## 工作区和commit之间的差异

`git diff [<options>] [<commit>]  [--] [<path>…​]`

## 两个commit之间的差异

`git diff [<options>] [<commit>][<commit>][--] [<path>…​]`