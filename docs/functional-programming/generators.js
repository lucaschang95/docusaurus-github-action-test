function* gen() {
    return 'hello world!'
}

let generatorResult = gen();

console.log(generatorResult.next());

function* gen1() {
    yield 'first';
    yield 'second';
    yield 'third';
}