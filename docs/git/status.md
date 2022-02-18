# git status

## Syntax

`git status [<options>...] [--] [<pathspec>`]`

## Discription

changes that:

- to be commited:
  - have differences between the index file and the current HEAD commit
  - deleted
- not staged for commit
  - have differences between working tree and the index file
  - deleted
- untracked file
  - in the working tree that are not tracked by Git
