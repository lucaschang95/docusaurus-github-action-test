# Redux

> Redux is a predictable state container for JavaScript apps.

分为：

1. redux: keep state
2. react-redux: bind state to React view (用 react 一套来实现 data 和 UI 的 binding)

## 什么时候需要使用 Redux? When should I use Redux?

Redux is more useful when:

- You have large amounts of application state that are needed in many places in the app
- The app state is updated frequently over time
- The logic to update that state may be complex
- The app has a medium or large-sized codebase, and might be worked on by many people

## terminology

### Actions

An action is a plain JavaScript object that has a type field. You can think of an action as an event that describes something that happened in the application.

### Action Creators

创建action对象

### Reducer

You can think of a reducer as an event listener which handles events based on the received action (event) type

- They should only calculate the new state value based on the state and action arguments
- They are not allowed to modify the existing state. Instead, they must make immutable updates, by copying the existing state and making changes to the copied values.
- They must not do any asynchronous logic, calculate random values, or cause other "side effects"

### store

所有功能存在store里面

###### dispatch

The only way to update the state is to call store.dispatch() and pass in an action object. The store will run its reducer function and save the new state value inside, and we can call getState() to retrieve the updated value

> You can think of dispatching actions as "triggering an event"

### Selectors

Selectors are functions that know how to extract specific pieces of information from a store state value
