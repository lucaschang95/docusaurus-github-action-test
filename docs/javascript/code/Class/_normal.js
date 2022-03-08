"use strict";

// class People {
//     constructor(name) {
//         this.name = name;
//     }

//     getName() {
//         console.log(this.name);
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

var People = /*#__PURE__*/ (function () {
    function People(name) {
        _classCallCheck(this, People);

        this.name = name;
    }

    _createClass(People, [
        {
            key: "getName",
            value: function getName() {
                console.log(this.name);
            },
        },
    ]);

    return People;
})();

var p = new People('dd');