# Universal Module Definition (UMD)

Basically, a UMD module is a JavaScript file that tries to guess at runtime which module system it’s being used in, and then it acts as that kind of module. 

```js
// myModuleName.js
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'b'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('b'));
    } else {
        // Browser globals
        factory((root.myModuleName = {}), root.b);
    }
}(typeof self !== 'undefined' ? self : this, function (exports, b) {
    // Use b in some fashion.

    // attach properties to the exports object to define
    // the exported module properties.
    exports.action = function () {};
}));
```