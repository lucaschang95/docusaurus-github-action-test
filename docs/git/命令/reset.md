# reset

> set the current branch head (HEAD) to `<commit>`, optionally modifying index and working tree to match

## syntax

`git reset [<mode>] [<commit>]`

- `--soft`: do not modify index and working tree
- `--mixed`: modify index but not working tree (默认是mixed)
- `--hard`: modify index and working tree
