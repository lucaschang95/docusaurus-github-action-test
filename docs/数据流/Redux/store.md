# store

Stores have three main methods

- `getState` returns the current state
- `dispatch` sends an action to the reducer to update the state
- `subscribe` takes a listener callback that runs each time an action is dispatched

Stores can be customized using "enhancers" and "middleware"