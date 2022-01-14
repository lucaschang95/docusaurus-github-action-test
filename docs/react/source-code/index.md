# react 源码阅读





## 渲染流程

1. 触发
   1. ReactDom.render, setState, hook, context
2. scheuleUpdateOnFiber
3. （possible) schedule
   1. 
4. 构建fiber树，部分dom节点
   1. 构建过程循环
5. commit（拼接dom节点）
   1. commitBeforeMutationEffects
   2. commitMutationEffects
   3. commitLayoutEffects