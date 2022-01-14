// string, number, boolean, object, array, null, undefined

const isObject = (value) => {
    const type = typeof value;
    return value !== null && (type === "object" || type === "function");
};

const initClonedArray = (array) => {
    const { length } = array;
    const result = new Array(length);
    return result;
};

const copyArray = (value, result) => {
    let index = -1;
    const { length } = value;
    while (++index < length) {
        result[index] = value[index];
    }
    return result;
};

const baseClone = (value, isDeep, map) => {
    let result;
    if (!isObject(value)) {
        return value;
    }
    if (Array.isArray(value)) {
        result = initClonedArray(value);
        if (!isDeep) {
            return copyArray(value, result);
        }
    }
    if (typeof value === "object") {
        result = {};
    }

    if (!isDeep) {
        Object.assign(result, value);
        return result;
    }

    map || (map = new Map());
    const mapped = map.get(value);
    if (mapped) {
        return mapped;
    }
    map.set(value, result);

    const keys = Object.keys(value);
    keys.forEach((k) => {
        result[k] = baseClone(value[k], isDeep, map);
    });
    return result;
};

const objA = {
    a: 1,
    b: [1, 2],
};
objA.c = objA;

// const resA = baseClone(objA, true);
// console.log(resA);
const resB = baseClone(objA, false);
console.log(resB);
