# Error

## 常见错误类型

### 构建错误

### 运行时错误

#### SyntaxError

#### ReferenceError

#### TypeError

### ResourceError 资源加载错误

### HttpError 网络错误

## 错误捕获

- try/catch
  - 运行时错误
- window.onerror
  - 运行时错误，异步错误
- `window.addEventListener('error', handler)
- Promise错误`
  - promise.catch
  - try/catch + await
  - import()
    - `import().catch`
  - `window.addEventListener('unhandledrejection', handler)`
- React
  - `<ErrorBoundary>`