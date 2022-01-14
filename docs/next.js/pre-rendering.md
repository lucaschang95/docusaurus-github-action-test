# 预渲染

By default, Next.js pre-renders every page. This means that Next.js generates HTML for each page in advance, instead of having it all done by client-side JavaScript



好处

- better performance
- SEO



两种pre-rendering

1. static generation

生成静态页面，在多次请求中返回同一个结果

1. server-side rendering

真正的预渲染，每次请求不同的后端数据



如何抉择？

1. Can I pre-render this page ahead of a user's request?



## 如何使用

getStaticProps

getServerSideProps