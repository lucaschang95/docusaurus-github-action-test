# error-boundary

**核心思想**：a js error in a part of the UI shouldn't break the whole app.

error-boundary也是一个react组件，负责catch，log, display错误时候的UI

**当一个类组件声明了`static getDerivedStateFromError()`或`componentDidCatch()`后, 该组件变为error boundary**

- error-boundaries **do not** catch errors inside event handlers



## 如何让一个组件成为error-boundary

增加下面几个方法

- **`static getDerivedStateFromError(error)`**
  - 返回一个fallback UI
- **`componentDidCatch(error, errorInfo)`**
  - log error information