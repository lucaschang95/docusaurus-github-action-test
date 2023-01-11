# ci

> clean install 全新安装

npm ci will be significantly faster when:

There is a package-lock.json or npm-shrinkwrap.json file.
The node_modules folder is missing or empty.

In short, the main differences between using npm install and npm ci are:

1. The project must have an existing package-lock.json or npm-shrinkwrap.json.
2. If dependencies in the package lock do not match those in package.json, npm ci will exit with an error, instead of updating the package lock.
3. npm ci can only install entire projects at a time: individual dependencies cannot be added with this command.
4. If a node_modules is already present, it will be automatically removed before npm ci begins its install.
5. It will never write to package.json or any of the package-locks: installs are essentially frozen.

## 用处

- 自动化环境: 测试平台、持续集成和部署