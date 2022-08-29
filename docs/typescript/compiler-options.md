# Compiler options 编译选项

## target

1. emit js 的版本，target 较低的时候会进行 down leveling
2. 编辑器的 delaration 版本
3. 默认为 es3

## noEmitOnError

- 有错误是是否输出js

## Strictness

- ts 严格模式：`noImplicitAny`，`strictNullChecks`

## noImplicitAny

1. ts 无法判断一个变量的类型时，这个变量的类型 fall back to `any`, 这个就叫 implicit any

## strictNullChecks

- 使用前必须narrow（排除null, undefined）

## ref

- https://segmentfault.com/a/1190000021421461?utm_source=tag-newest