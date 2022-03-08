var People = (function () {
    function People(name) {
        this.name = name;
    }

    People.legNum = 2;
    People.prototype.getName = function () {
        return this.name;
    };

    return People;
})();
