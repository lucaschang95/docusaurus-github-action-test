"use strict";

// class People {
//     #getHeight() {
//         return "5";
//     }

//     getHeight() {
//         this.#getHeight();
//     }
// }

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", { writable: false });
    return Constructor;
}

function _classPrivateMethodInitSpec(obj, privateSet) {
    _checkPrivateRedeclaration(obj, privateSet);
    privateSet.add(obj);
}

function _checkPrivateRedeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
        throw new TypeError(
            "Cannot initialize the same private elements twice on an object"
        );
    }
}

function _classPrivateMethodGet(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return fn;
}

var _getHeight = /*#__PURE__*/ new WeakSet();

var People = /*#__PURE__*/ (function () {
    function People() {
        _classCallCheck(this, People);

        _classPrivateMethodInitSpec(this, _getHeight);
    }

    _createClass(People, [
        {
            key: "getHeight",
            value: function getHeight() {
                _classPrivateMethodGet(this, _getHeight, _getHeight2).call(
                    this
                );
            },
        },
    ]);

    return People;
})();

function _getHeight2() {
    return "5";
}

const p = new People();

p.getHeight();