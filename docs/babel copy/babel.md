# Babel

## 可以做什么？

- transform syntax
- polyfill
- source code transformations

## 编译流程

一般来说，babel转换代码分为一下三个步骤

1. parse
  sourcecode -> ast
2. transform
  transform ast on demand
3. generate
  generate modified code

![a](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ee9eaa1f265c4c49ad156f2c691748d9~tplv-k3u1fbpfcp-watermark.awebp)

## @babel/preset-env

- lastest JavaScript

## plugin

平时很少使用到babel的api，更多的是使用别人封装的plugin

## preset

多个plugin组合成的preset，如preset-env, preset-typescript

preset-env: esnext

- 按需polyfill, 根据targets，决定哪些api需要polyfill，然后按需引入plugin

preset-react
preset-typescript

### 应用顺序
1. 先应用pluin, 再应用preset
2. plugin从前到后，preset从后到前