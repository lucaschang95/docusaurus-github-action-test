// 返回this
let obj = {
    value: 1,
    increment: function() {
        this.value++;
        return this;
    },
    add: function(v) {
        this.value += v;
        return this;
    },
    shout: function() {
        alert(this.value);
    }
};