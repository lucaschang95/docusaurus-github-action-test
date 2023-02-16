# Project reference 工程引用

> allow you to structure your TypeScript programs into smaller pieces.

## 好处

- greatly improve build times
- enforce logical separation between components
- organize your code in new and better ways

## 区别

- Importing modules from a referenced project will instead load its output declaration file (.d.ts)
- If the referenced project produces an outFile, the output file .d.ts file’s declarations will be visible in this project
- Build mode (see below) will automatically build the referenced project if needed