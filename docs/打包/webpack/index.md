# webpack

## 编译的起点

1. cli调用的方式
2.

##  编译主流程

run

compile

make

- 调用loader

seal

- compliation.chunks, compliation.assets

[https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/11/4/16e36414e1b195eb~tplv-t2oaga2asx-watermark.awebp][主流程]

[主流程]: https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/11/4/16e36414e1b195eb~tplv-t2oaga2asx-watermark.awebp

## 好处

- 依赖关系更加明显
- 保证模块之间正确的顺序：加载，执行
  - 不然有可能依赖的外部库还没执行，代码就开始执行
- tree-shaking

## entry

- which module webpack should use to begin building out its internal dependency graph
