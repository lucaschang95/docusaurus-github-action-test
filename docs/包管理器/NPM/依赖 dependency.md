# 依赖

## optional dependencies

> As for the optionalDependencies the difference is that build failure of the dependency will not cause installation to fail. But it is your program's responsibility to handle the lack of the dependency.

### 如何使用？

`npm install someDependency --save-optional`: 将一个依赖安装为 optional dependency

`npm ci --no-optional`: 不安装 optional dependency

`npm ci`: 安装 optional dependency
