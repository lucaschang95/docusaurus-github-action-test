# Webpack

- 配置文件：就是CommonJS file

## 好处

- 依赖关系更加明显
- 保证模块之间正确的顺序：加载，执行
  - 不然有可能依赖的外部库还没执行，代码就开始执行
- tree-shaking



## entry

- which module webpack should use to begin building out its internal dependency graph