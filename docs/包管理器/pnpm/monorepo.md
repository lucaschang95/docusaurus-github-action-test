# monorepo

## 使用 pnpm 创建 monorepo

1. pnpm init -y
2. 创建 pnpm-workspace.yaml
3. 在 packages 文件夹下面创建各个 repo

```yaml
packages:
  # all packages in direct subdirs of packages/
  - 'packages/*'
```
