console.log(42); // number, або числові
console.log(1 / 0); // Infinity
console.log('привіт'); // string, або рядкові

let isGreater = 4 > 1;
console.log(isGreater); // boolean, або логічні

console.log(BigInt(9007199254740991) + 1n); // bigint, або великі цілі числа

let age = null;
console.log(null); // null, або порожні

let date;
console.log(date); // undefined, або невизначені

console.log(Symbol('number')); // symbol, або символьні

console.log({}, []); // object, або об’єктні

console.log(function () {}); // object, особливий тип об’єктів
