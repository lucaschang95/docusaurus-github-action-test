# merge

> Join two or more development histories together

Then "git merge topic" will replay the changes made on the topic branch since it diverged from master (i.e., E) until its current commit (C) on top of master, and record the result in a new commit along with the names of the two parent commits and a log message from the user describing the changes.

## merge 过程

1. changes since it diverged from master until its current commit 
2. replay the changes
3. record the result in a new commit

## 基本用法

```shell
git merge topic
```

merge topic branch into current branch

```shell
git merge --abort
git merge --continue
# abort or continue a merge
```

## 一些重要的 flag

```shell
--commit
--no-commit
```

默认情况下是 `--commit`，即在merge完成后，自动提交。

`--no-commit` 时：stop just before creating a merge commit, to give the user a chance to inspect and further tweak the merge result before committing. （给用户一个检视代码的时间）

`--ff`, `--no-ff`, `--ff-only`

- `--ff`: 按需进行 fast-forward merge, 否则 create a merge commit.
- `--no-ff`: 创建 merge commit in all cases
- `--ff-only`: resolve the merge as a fast-forward when possible. When not possible, refuse to merge and exit with a non-zero status.

`--[no-]verify`

bypassed the pre-merge and commit-msg hooks