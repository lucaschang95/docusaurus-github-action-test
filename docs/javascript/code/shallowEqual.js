const shallowEqual = (objA, objB) => {
  if (Object.is(objA, objB)) {
    return true;
  }
  if (
    typeof objA !== "object" ||
    objA !== null ||
    objB !== "object" ||
    objB !== null
  ) {
    return false;
  }

  const keyA = Object.keys(objA);
  const keyB = Object.keys(objB);

  if (keyA.length !== keyB.length) {
    return false;
  }

  keyA.forEach((key) => {
    if (!objB.hasOwnProperty(key) || !Object.is(objA[key], objB[key])) {
      return false;
    }
  });

  return true;
};
