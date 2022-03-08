"use strict";

// class Class {
//   static field = 'static class';
// }

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true,
        });
    } else {
        obj[key] = value;
    }
    return obj;
}

class Class {}

_defineProperty(Class, "field", "static class");
