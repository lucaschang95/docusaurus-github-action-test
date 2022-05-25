# version

keep the JavaScript ecosystem healthy, reliable, and secure

## 版本格式

MAJOR.MINOR.PATCH

- MAJOR: breaking change
- MINOR: add functionality in a backwards compatible manner
- PATCH: backwards compatible bug fixes

## publish packages

first release 1.0.0

## package.json

- no release: 1.0.4 (锁版本号)
- patch release: 1.0, 1.0.x, ~1.0.4
- minor release: 1, 1.x, ^1.0.4
- Major release: *, x

## 符号

`^`: 匹配大版本号
`~`: 匹配小版本号
`>`: any version higher than
`>=`: equal to or higher than
`<`: any version higher than
`<=`: equal to or higher than
`=`: equal
`-`: you accept a range of versions. Example: 2.1.0 - 2.6.2
`||`: you combine sets. Example: < 2.1 || > 2.6
`*`: 匹配任意版本号
`latest`: you want to use the latest version available
