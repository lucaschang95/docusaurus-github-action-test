# React



## 主干逻辑

1. 将每一次更新视为一次更新需求
2. 不会立即构造fiber数，而是去调度中心schuler创建一个task（将更新需求转换为了一个task）
3. 调度中心通过任务调度循环来执行task
   1. fiber构造循环，构造最新的fiber树
   2. commitRoot，把最新的fiber树渲染到页面上。task完成