# reducer 

> Every store has a single root reducer function

## combineReducer

> 将不同的 reducer 放到不同文件中, 方便维护

手动融合

```typescript
function rootReducer(state = {}, action: any) {
    return{
        foo: fooReducer((state as State).foo, action),
        bar: barReducer((state as State).bar, action),
    }
}
```

combineReducer from redux

```typescript
function rootReducer = combineReducers({
    foo: fooReducer,
    bar: barReducer,
})
```

Reducers are usually written in "slice" files, organized into "feature" folders
