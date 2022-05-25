# Proxy

> The Proxy object enables you to create a proxy for another object, which can intercept and redefine fundamental operations for that object.

```js
const target = {
  message1: "hello",
  message2: "everyone"
};

const handler3 = {
  get(target, prop, receiver) {
    if (prop === "message2") {
      return "world";
    }
    return Reflect.get(...arguments);
  },
};

const proxy3 = new Proxy(target, handler3);

console.log(proxy3.message1);
console.log(proxy3.message2);
```

## Proxy 可以做什么?

- 校验


## 

- get
- set
- construct
- apply