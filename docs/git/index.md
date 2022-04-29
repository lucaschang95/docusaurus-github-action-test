# Git

## what is git?

A Git repository is a collection of objects and references. Objects have relationships with each other, and references point to objects and to other references. The main objects in a Git repository are commits, but other objects include blobs and trees. The most important references in Git are branches, which you can think of as labels you put on a commit.

## git的几大区域

- 工作区 working directory
- 暂存区 staging area
- 版本库 local repository
- 远程仓库 remote repository

## 是否被track?

- tracked file是指在上次snapshot中就存在的文件
  - tracked file是指git已知文件
- tracked file可以是unmodified, modified, statged
- git add 来 track new files

## 参考

- [https://git-scm.com/docs](https://git-scm.com/docs)