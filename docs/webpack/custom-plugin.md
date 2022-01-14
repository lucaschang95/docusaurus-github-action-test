# custom plugin

一个合乎规范的插件：

1. 具名的函数/JS;
2. 在原型链上执行apply方法
3. 制定一个明确的时间钩子并注册回调
4. 处理webpack内部实例的特定数据（complier, compliation)
5. 调用webpack传入的回调