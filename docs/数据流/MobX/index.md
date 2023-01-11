# mobx

## 基本概念

- state
- actions
- derivations

## state

state is the data that drives your application

## actions

update state using actions

## derivations

anything that can be derived from the state without any futther interaction is a derivation

derivations 有多种形式

- the user interface
- derived data
- backend integrations, e.g. sending changes to the server

分为两种: computed values, Reactions (有副作用)

## 过程

actions -> observable state -> derived values -> reactions

## 原则

1. All derivations are updated automatically and atomically.
2. All derivations are updated synchronously by default.
3. Computed values are updated lazily.
4. All computed values should be pure.
