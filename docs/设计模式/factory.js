// 静态工厂模式

function CarMaker() {};

CarMaker.prototype.drive = function() {
    console.log('this car has' + this.doors + 'doors.');
}

CarMaker.factory = function(type) {
    let conStr = type, newCar;

    // 错误处理， 如果不存在该类型则报错
    if(typeof CarMaker[conStr] !== 'function') {
        throw new Error(conStr + 'does not exist.');
    }

    if (typeof CarMaker[conStr].prototype.dirve !== 'function') {
        CarMaker[conStr].prototype = new CarMaker;
    }

    newCar = new CarMaker[conStr]();
    return newCar;
};

CarMaker.Compact = function() {
    this.doors = 4;
};

CarMaker.Convertible = function() {
    this.doors = 2;
};

CarMaker.SUV = function() {
    this.doors = 17;
};