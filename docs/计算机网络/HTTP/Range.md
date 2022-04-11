# HTTP Range 规范

> 允许服务器给予客户端的请求只发送响应包体的一部分给到客户端。客户端自动将多个片段的包体合成完整的体积更大的包体

- 断点续传
- 多线程下载
- 支持播放器实时拖动

- 服务器通过Accept-Range头部表示是否支持Range请求
  - Accept-Ranges: bytes
  - Accept-Ranges: none
- 客户端通过Range请求头部表示请求的范围

