# parsing HTML

## script的影响

同步脚本

- 停止解析，先去加载脚本，然后执行，执行结束后继续解析HTML文档

defer脚本

- non-blocking
- 后台加载脚本，文档解析过程不间断，文档解析结束，defer脚本开始执行
- 在DOM解析后，DOMContentLoaded之前
- defer脚本之间保持执行顺序
- only for external scripts

async脚本

- non-blocking
- 后台加载脚本，下载完成，文档停止解析，脚本执行，执行结束后文档继续解析

dynamic脚本

- js中引入其他<script>, 行为和async一样



## DOMContentLoaded

- 当 HTML 文档解析完成就会触发

## load

- 所有资源加载完成之后，load 事件才会被触发

## ref

- https://zhuanlan.zhihu.com/p/25876048
- https://javascript.info/script-async-defer