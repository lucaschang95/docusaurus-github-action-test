# Lerna

> Lerna is a tool that optimizes the workflow around managing multi-package repositories with git and npm.

## 一个 monorepo 包管理器, 需要实现那些功能?

1. workspace 管理
2. 依赖管理: 外部 dep, 外部 dev dep, 内部 dep
3. publish packages to npm
4. 自身包 version management: major, minor, patch, 还是 alpha, beta, rc....
5. 外部包 version management: 安装到哪里? 依赖冲突了怎么办?
