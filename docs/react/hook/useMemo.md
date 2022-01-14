# useMemo

const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

- 依赖不变时，有可能使用内存中的计算值
- 自己应该确保函数是pure function