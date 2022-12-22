# jsdom

jsdom is a pure-JavaScript implementation of many web standards, notably the WHATWG DOM and HTML Standards, for use with Node.js.

## 限制

- Navigation: the ability to change the global object, and all other objects, when clicking a link or assigning location.href or similar.
- Layout: the ability to calculate where elements will be visually laid out as a result of CSS, which impacts methods like `getBoundingClientRects()` or properties like `offsetTop`.
