class Rectangle {
    #id;

    constructor(height, width, id) {
        this.height = height;
        this.width = width;
        this.#id = id;
    }

    // Method
    calcArea() {
        return this.height * this.width;
    }
}

("use strict");

function getPrivateMethod(target, privateMap) {
    return privateMap.get(target);
}

const _id = new WeakMap();
const _privateMethod = new WeakSet();

const _Rectangle = function _Rectangle(height, width, id) {
    this.height = height;
    this.width = width;
    _id.set(this, id);
    _privateMethod.add(this);
};

_Rectangle.prototype.getId = function getId() { 
    _privateMethod.has(this) && privateMethod.call(this);
    return getPrivateMethod(this, _id)
};

function privateMethod() {
    console.log('trigger private method')
}
