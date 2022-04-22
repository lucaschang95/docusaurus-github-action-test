# middleware 中间件

> customize the dispatch function

用处: logging, crash reporting, talking to an asynchronous API, routing, and more.

middleware can have side effects inside

## middleware 可以干什么?

1. pass the action onwards with next(action),
2. restart the pipeline with storeAPI.dispatch(action)
3. Can also use storeAPI.getState() here

- Log something to the console
- Set timeouts
- Make asynchronous API calls
- Modify the action
- Pause the action or even stop it entirely

```javascript
function exampleMiddleware(storeAPI) {
  return function wrapDispatch(next) {
    return function handleAction(action) {
      // Do anything here: pass the action onwards with next(action),
      // or restart the pipeline with storeAPI.dispatch(action)
      // Can also use storeAPI.getState() here

      return next(action)
    }
  }
}
```

## 洋葱模型

```javascript
const loggerMiddleware = storeAPI => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', storeAPI.getState())
  return result
}
```

next(action) passes the action to the next middleware in the pipeline

## 名字

Outer: someCustomMiddleware (or whatever your middleware is called)
Middle: wrapDispatch
Inner: handleAction