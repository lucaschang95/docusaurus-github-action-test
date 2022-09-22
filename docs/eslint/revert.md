# revert

> Revert some existing commits

基本用法

`git revert <commit>`

`git revert HEAD~3`: revert 掉 HEAD~3 的 commit 的内容

`git revert -n master~5..master~2`: revert 掉 master~5 到 master~2 的内容
