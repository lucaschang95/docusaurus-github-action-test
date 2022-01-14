# 错误





#### 六种错误

- ReferenceError
- TypeError
- RangeError
- SyntaxError
- EvalError
- URIError



## 同步error

try{ } catch(e) { console.log(e) }



## 异步error

异步代码并不在try catch上下文中执行，唯一的同步逻辑只有创建一个异步函数



**async函数内的异常**

异步函数返回一个promise，可以使用.catch



**async函数内的异步函数**

异步函数内调用reject，这样才能将error捕获



**并行的error建议使用promise.all来处理**



**dom时间监听函数里抛出的错误无法被捕获**



## 全局异常监控

window.addEventListener('error')

window.addEventListener('unhandledrejection')

