# glob patterns

## 通配符匹配

A string can be considered a wildcard pattern if it contains one of the following characters: *, ?, or [.

```bash
# 当前文件夹及其子文件夹下的所有 markdown 文件
**/*.md

# 当前文件夹下的所有 markdown 文件
*.md

# xat.md 文件，问号仅匹配一个字符
?at.md

# [] 匹配一个 range
```