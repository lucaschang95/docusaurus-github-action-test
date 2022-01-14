// let Gadget = function() {};

// Gadget.isShiny = function() {
//     console.log('you bet');
// };

// Gadget.prototype.setPrice = function(price) {
//     this.price = price;
// };

// Gadget.isShiny();

// Gadget.prototype.isShiny = Gadget.isShiny;

// let iphone = new Gadget();
// iphone.setPrice(5000);
// console.log(iphone.price);

// var Gadget = (function() {
//     var counter = 0;
//     function rise() {
//         counter++;
//     }
//     function getCounter() {
//         return counter;
//     }
//     return function() {
//         console.log(counter++);
//     };
// }());

// var gad = new Gadget();
// var gad = new Gadget();

let Gadget = (function() {
    let counter = 0, NewGadget;

    NewGadget = function() {
        counter++;
    };

    NewGadget.prototype.getLastId = function() {
        return counter;
    }

    return NewGadget
}());