# Concepts 概念

## store

> A "store" is a container that holds your application's global state.

A Redux store runs the root reducer whenever an action is dispatched

## action

> Actions are plain objects with a type field, and describe "what happened" in the app

We usually write that type string like "domain/eventName"

```javascript
const addTodoAction = {
  type: 'todos/todoAdded',
  payload: 'Buy milk'
}
```

## reducer

> Reducers are functions that calculate a new state value based on previous state + an action

reducer 原则

1. only based on the state and action arguments
2. not allowed to modify the existing state
3. must not cause other "side effects" (asynchronous logic, calculate random values)

如果 care 这个原则, 那么返回一个新对象, 否则返回原对象 (永远不能修改原有对象, immutability)

## dispatch

like triggering an event

## selector

> functions that know how to extract specific pieces of information
