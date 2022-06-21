# ssr

## ssr 干了什么事情？

SSR in React always happens in several steps:

- On the server, fetch data for the entire app.
- Then, on the server, render the entire app to HTML and send it in the response.
- Then, on the client, load the JavaScript code for the entire app.
- Then, on the client, connect the JavaScript logic to the server-generated HTML for the entire app (this is “hydration”).

## React 18 做了什么？

1. streaming html
2. selective hydration

## 相关的库