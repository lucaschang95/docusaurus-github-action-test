# base64

> represent binary data in an ASCII string format by translating it into a radix-64 representation.

使用64个可打印字符来表示二进制数据的表示方法, 是一个 radix-64 表示

commonly used when there is a need to encode binary data that needs to be stored and transferred over media that are designed to deal with ASCII

base64 中, = 等于号用于padding, 补足 (因为 base64 每个字符对应 6 个 bit)

## Javascript 中

`btoa`: binary to ascii (base64 encoding)
`atob`: ascii to binary (base64 decoding)