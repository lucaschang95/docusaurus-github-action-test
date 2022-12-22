# mock function

通过以下几种方法测试函数：

- erasing the actual implementation of a function
- capturing calls to the function (and the parameters passed in those calls)
- capturing instances of constructor functions when instantiated with new
- llowing test-time configuration of return values

There are two ways to mock functions: Either by creating a mock function to use in test code, or writing a manual mock to override a module dependency.

## 示例

```ts
const mockCallback = jest.fn(x => 42 + x);
forEach([0, 1], mockCallback);

// The mock function is called twice
expect(mockCallback.mock.calls.length).toBe(2);

// The first argument of the first call to the function was 0
expect(mockCallback.mock.calls[0][0]).toBe(0);

// The first argument of the second call to the function was 1
expect(mockCallback.mock.calls[1][0]).toBe(1);

// The return value of the first call to the function was 42
expect(mockCallback.mock.results[0].value).toBe(42);
```

- mock 次数
- mock 入参
- mock 出参 （洋葱模型）
- mock 实现
- mock once