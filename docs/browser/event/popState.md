# popState事件

`window.addEventListener('popState', xxx)`

## 触发条件

- `history.back()`, `history.forward()`, `history.go()`
- 在浏览器中按下了前进键，后退键

说明：pushState, replaceState并不会触发`popState`事件

## state

- 如果该history是pushState/replaceState触发的，那么`event.state`中包含了pushState/replaceState中传入的state对象