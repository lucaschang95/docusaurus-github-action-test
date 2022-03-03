# git diff

show changes between commits, commit and working tree, etc

## syntax

`git diff [<options>] [--] [<path>…​]`

工作区/暂存区 the changes you made relative to the index (staging area for the next commit)

`git diff [<options>] --cached [--merge-base] [<commit>] [--] [<path>…​]`

`git diff [<options>] [<commit>]  [--] [<path>…​]`

比较工作区和commit之间的区别

### 两个commit之间的差异

`git diff [<options>] [<commit>][<commit>][--] [<path>…​]`