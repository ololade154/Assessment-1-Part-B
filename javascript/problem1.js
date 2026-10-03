function deepEqual(objA, objB) {
  const keyA = Object.keys(objA);
  const keyB = Object.keys(objB);
  //checking if both object are equal or not
  if (objA === objB) return true;
  //checking if both object are null or not and also checking if both object are of the type object or not
  if (
    objA === null ||
    objB === null ||
    typeof objA !== "object" ||
    typeof objB !== "object"
  ) {
    return false;
  }
  //checking if both object are array or not
  if (Array.isArray(objA) !== Array.isArray(objB)) {
    return false;
  }
  //checking if both object have the same number of keys or not
  if (keyA.length !== keyB.length) {
    return false;
  }
  // iterating through the keys of the first object and checking if the key is present in the second object or not and also checking if the value of the key is equal in both objects or not
  for (const key of keyA) {
    if (!(key in objB)) {
      return false;
    } else if (!deepEqual(objA[key], objB[key])) {
      return false;
    }

    return true;
  }
  console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } })); // true
  console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 3 } })); // false
  console.log(deepEqual({ a: 1 }, { a: 1, b: 2 })); // false
}
