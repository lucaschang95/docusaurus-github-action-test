# update

## 场景

通常, `npm install` 之后, package 只锁了大版本, 例如: `^1.3.1`

此时, 使用 `npm update`, npm 会更新 package.json 和 package-lock.json

npm update --no-save to not update package.json.

```shell
# npm will check all packages for a newer version that satisfies your versioning constraints.
npm update
```

`npm update -g <package_name>`
`npm update -g`