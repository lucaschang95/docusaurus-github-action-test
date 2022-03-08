/**
 * 1. constructor放到函数体里
 */

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

function _Rectangle(height, width) {
    this.height = height;
    this.width = width;
}
