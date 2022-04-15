# Array-like Object

An array-like is an object It has indexed access to the elements and a non-negative length property to know the number of elements in it. These are the only similarities it has with an array. Doesn't have any of the Array methods like, push, pop, join, map, etc. Objects that have indexed properties and length are called array-like. Such objects may also have other properties and methods, but lack the built-in methods of arrays.

常见的 array-like对象

1. arguments object in functions
2. HTMLCollection in DOM
3. NodeList objects in DOM
