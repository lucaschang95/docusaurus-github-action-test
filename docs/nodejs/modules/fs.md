# fs

> provides a lot of very useful functionality to access and interact with the file system.

## `fs.writeFile()`

`fs.writeFile('/Users/joe/test.txt', content, { flag: 'a+' }, err => {});`

## `fs.appendFile()`

## 文件夹操作

`fs.access()`: 文件夹是否存在, 有无权限访问
`fs.existsSync(folderName)`: 文件夹是否存在

`fs.mkdir()` or `fs.mkdirSync()`: 创建文件夹