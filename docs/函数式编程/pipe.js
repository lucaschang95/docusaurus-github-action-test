const pipe = (...fns) => (
    (value) => fns.reduce((q, fn) => fn(q), value)
);

const add1 = (x) => x + 1;
const double = (x) => 2 * x;

const add1thendouble = pipe(add1, double);

console.log(add1thendouble(2));