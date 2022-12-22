# pnpm

- creating a non-flat node_modules directory 默认会创建 non-flat 的 node_modules

## virtual store

> .pnpm 文件夹下面

格式 `.pnpm/<name>@<version>/node_modules/<name>`

[https://pnpm.io/assets/images/node-modules-structure-8ab301ddaed3b7530858b233f5b3be57.jpg](https://pnpm.io/assets/images/node-modules-structure-8ab301ddaed3b7530858b233f5b3be57.jpg)

## 配置 pnpm

`pnpm config set store-dir /path/to/.pnpm-store`

## 命令的过滤

只对一部分 packages 生效

`pnpm --filter <package_selector> <command>`
