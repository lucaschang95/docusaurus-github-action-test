# 正则表达式

## 在 JavaScript 中如何使用正则？

Regular expressions are used with the RegExp methods test() and exec() and with the String methods match(), replace(), search(), and split().

## 如何创建正则表达式

- literal: const re = /pattern/flags;
- new 实例: const re = new RegExp('pattern', 'flags');

## flags

Flag Description Corresponding property

- g: Global search
- i: Case-insensitive search
- m: multiline, Allows ^ and $ to match newline characters

## 捕获组 group

```js
const personList = `First_Name: John, Last_Name: Doe
First_Name: Jane, Last_Name: Smith`;

const regexpNames =  /First_Name: (\w+), Last_Name: (\w+)/mg;
for (const match of personList.matchAll(regexpNames)) {
  console.log(`Hello ${match[1]} ${match[2]}`);
}
```
