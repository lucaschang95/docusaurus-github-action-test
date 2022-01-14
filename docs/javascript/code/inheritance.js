function Person(name) {
  this.name = name;
}

Person.constructor.a = 'test';

console.log('Person.constructor', Person.constructor);
console.log('Person.constructor', Person.constructor.a);

const anna = new Person('dada');

// for (let key in a) {
//   console.log('key', key);
// }

const a = { a: 1, b: 2 };
const b = { c: 3, d: 4 };
Object.setPrototypeOf(a, b);

console.log('a.c', a.c);

for (let key in a) {
  console.log('key', key);
}
console.log('a', a.prototype);
console.log('a', a.__proto__);