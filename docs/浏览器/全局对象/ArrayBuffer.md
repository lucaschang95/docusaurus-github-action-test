# ArrayBuffer

> a generic, fixed-length raw binary data buffer, 原始的二进制数据

在 JavaScript 中, ArrayBuffer, TypedArray, DataView 和 Buffer ( node ) 联系紧密

array of bytes, often referred to in other languages as a "byte array" or "byte buffer"

可以通过 TypedArray 这个视图来操作 ArrayBuffer 对象

1. ArrayBuffer 在内存中创建了一段二进制数据
2. 不能直接读写，只能通过视图进行操作 (TypedArray / DataView)