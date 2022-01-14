# CSS styled 技术





## styled做了什么

- 透传tag名，创建相应标签
- 添加自己的生命周期函数
  - CSS预处理
  - CSS注入
- tag名与注入CSS的类名相同，使得CSS规则生效





## css preprocessing

预处理

- 借助stylis
- 将传入的string进行处理

- 发生在 componenetWillMount()



## CSS injection into page

## 如何进行hash

- componentId
  - 'sc-' + hash('sc' + counter);
- className
  - hash(componentId + evaluatedStyles);

## render

- 造出有着相应className的组件



## ref

- https://medium.com/styled-components/how-styled-components-works-618a69970421