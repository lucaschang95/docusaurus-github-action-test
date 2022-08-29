# sed 命令

manipulate text in streams and files

## syntax

`sed OPTIONS [SCRIPT] [INPUTFILENAME]`

## 例子

`sed 's/patternA/patternB' test.txt`

将 patternA 替换为 pattern B

s flag: substitution 替换

`sed 's/patternA/patternB/2' test.txt`

将第二次出现的 patternA 替换为 pattern B

s flag: substitution 替换

`sed 's/patternA/patternB/g' test.txt`

全局替换，2g 则为从第二个开始的全局替换

`sed -ie 's/faf/xxx/g' test.txt`

原位修改