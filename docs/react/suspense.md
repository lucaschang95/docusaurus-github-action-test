# Suspense

`React.Suspense` lets you specify the loading indicator in case some components in the tree below it are not yet ready to render.  

- 在**组件懒加载**时候使用



<suspense fallback={}>{React.lazy(() => import('./LazyComponent'))}</suspense>