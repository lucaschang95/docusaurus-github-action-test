# Lifecycle 生命周期

## mounting 挂载

constructor

- 实例化时候执行
  - 第一次构建fiber树循环，beginWork阶段



static getDerivedStateFromProps( )

- 实例化时候执行
  - 第一次构建fiber树循环，beginWork阶段

render( )

- 实例化时候执行
  - 第一次构建fiber树循环，beginWork阶段
- (React updates DOM and refs)
- componentDidMount

## updating 更新

- static getDerivedStateFromProps( )
- shouldComponentUpdate( )
- render( )
- getSnapshotBeforeUpdate( )
- (React updates DOM and refs)
- componentDidUpdate( )

## unmounting 卸载

- componentDidUnmount( )



## ref

- https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/