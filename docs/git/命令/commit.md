# commit

> Record changes to the repository

## syntax

### message

- `-m <msg>`
- `--message=<msg>`

### 覆盖author

- `--author=<author>`

### 跳过pre-commit hook

- `--no-verify` or `-n`

## 场景

### 我的提交信息写错了

```shell
git commit --amend --only
```

### 我提交里的 user 和 email 不对

```shell
git commit --amend --autor "lucaschang<xingzhao.chang@gmail.com>"
```

## 参考

- commit message:
  - <https://gist.github.com/brianclements/841ea7bffdb01346392c>
  - <https://juejin.cn/post/6844903606815064077>
  - <https://www.zhihu.com/question/21209619/answer/257574960s>
