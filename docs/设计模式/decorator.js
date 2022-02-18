// function Sale(price) {
//     this.price = price || 0;
// }

// Sale.prototype.getPrice = function() {
//     return this.price;
// };

// Sale.decorators = {};

// Sale.decorators.fedtax = {
//     getPrice: function() {
//         let price = this.uber.getPrice();
//         price += price * 5 / 100;
//         return price;
//     },
// };

// Sale.decorators.quebec = {
//     getPrice: function() {
//         let price = this.uber.getPrice();
//         price += price * 7.5 / 100;
//         return price;
//     },
// };

// Sale.decorators.money = {
//     getPrice: function() {
//         return '$' + this.uber.getPrice().toFixed(2);
//     },
// };

// Sale.decorators.cdn = {
//     getPrice: function() {
//         return 'cdn$' + this.uber.getPrice().toFixed(2);
//     },
// };

// Sale.prototype.decorate = function(decorator) {
//     let F = function() {}, overrides = this.constructor.decorators[decorator], i, newobj;
//     F.prototype = this;
//     newobj = new F();
//     newobj.uber = F.prototype;
//     for(i in overrides) {
//         if (overrides.hasOwnProperty(i)) {
//             newobj[i] = overrides[i];
//         }
//     }
//     return newobj;
// };

// let sale = new Sale(100);
// sale = sale.decorate('fedtax');
// sale = sale.decorate('quebec');
// sale = sale.decorate('money');
// console.log(sale.getPrice());

let parent = {
    price: 5,
};

let child = Object.create(parent);

console.log(child.price);