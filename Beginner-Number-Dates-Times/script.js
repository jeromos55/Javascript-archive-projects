'use strict';

// numbers
console.log('--- numbers ---');

console.log(23 === 23.0);

// Decimal Base 10 - 0 to 9, 1/10 = 0.1, 3/10 = 3.3333333333
// Binary Base 2 - 0 1
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

// Conversion
console.log('--- conversion ---');

console.log(Number('23'));
console.log(+'23');
console.log('23');

//Parsing
console.log('--- parsing ---');

console.log(Number.parseInt('30px', 10)); // decimal
console.log(Number.parseInt('1010', 2)); // binary
console.log(Number.parseInt('fgf30p', 10));

console.log(Number.parseInt('2.5rem'));
console.log(Number.parseFloat('2.5rem'));

// checking if value is NaN
console.log('--- checking if value is NaN ---');

console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20X'));
console.log(Number.isNaN(20 / 0));

// checking if value is number
console.log('--- checking if value is number ---');

console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20X'));
console.log(Number.isFinite(23 / 0));

console.log(23);
console.log(23.0);
console.log(23 / 0);

// Math and rounding
console.log('--- Math and rounding ---');

console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

console.log(Math.max([5, 18, 23, 11, 2]));
console.log(Math.max([5, 18, '23', 11, 2]));
console.log(Math.max([5, 18, '23px', 11, 2]));
console.log(Math.min([5, 18, 23, 11, 2]));

console.log(Math.PI * Number.parseFloat('10px') ** 2);
console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) =>
  Math.trunc(Math.random() * (max - min + 1)) + min;
// 0...1 -> 0...(max - min) -> min...max
console.log(randomInt(1, 20));

// rounding integers
console.log('--- rounding integers ---');

console.log(Math.round(23.3));
console.log(Math.round(23.9));

console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));

console.log(Math.floor(23.3));
console.log(Math.floor('23.9'));

console.log(Math.trunc(23.3));

console.log(Math.trunc(-23.3));
console.log(Math.floor(-23.3));

// rounding decimals
console.log('--- rounding decimals ---');

console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log((2.345).toFixed(2));
console.log(+(2.345).toFixed(2));

// remainder operator
console.log('--- remainder operator ---');

console.log(5 % 2); // 2+2+1 = 5
console.log(5 / 2);

console.log(8 % 3); // 3+3+2 = 8
console.log(8 / 3);

console.log(6 % 2); // 2+2+2 = 6
console.log(6 / 2);

console.log(7 % 2); // 2+2++2+1 = 7
console.log(7 / 2);

const isEven = (n) => (n % 2 === 0 ? 'even' : 'odd');
console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(514));

// numeric separator
console.log('--- numeric separator ---');

// 286,460.000.000
const diameter = 286_460_00_000;
console.log(diameter);

const price = 34_99;
console.log(price);

const transferFee1 = 15_00;
const transferFee2 = 1_500;

const PI = Math.PI;
console.log(PI);

console.log(Number(230_000));
console.log(parseInt('230_000'));

// working with BigInt
console.log('--- working with BigInt ---');

console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);

// don't correct numbers
console.log("--- don't correct numbers ---");
console.log(2 ** 53 + 0);
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);

console.log(567892365348756398376776767674623565789n);
console.log(BigInt(567892365348756398376776767674623565789));
console.log(567892365348756398n);

// operation
console.log(1000000n * 1000000n);
console.log(458759535384579587498375395757n * 10000000442n);
// console.log(Math.sqrt(16n)); // TypeError: cannot convert a BigInt value to a number

const huge = 5553455345345n;
const num = 23;
// console.log(huge * num); // TypeError: cannot mix BigInt other types
console.log(huge * BigInt(num));

// exceptions
console.log(20n > 15);
console.log(20n === 20);
console.log(typeof 20n);
console.log(20n == '20');

// division
console.log(11n / 3n); // only integer part of the division
console.log(101 / 3);

// creating dates
const now = new Date();
console.log(now);

console.log(new Date('Aug 02 2020 18:05:41'));
console.log(new Date('December 24, 2015'));
// console.log(new Date(account1.movementsDates[0]));

console.log(new Date(2037, 10, 19, 15, 23, 5));
console.log(new Date(2037, 10, 31));

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));

// Working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());

console.log(new Date(2142256980000));

console.log(Date.now());

future.setFullYear(2040);
console.log(future);
