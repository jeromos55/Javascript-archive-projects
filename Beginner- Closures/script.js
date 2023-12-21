'use strict';

//-----------------------------------------------
// Immediately invoked function expression (IIFE)
//-----------------------------------------------

const runOnce = function () {
  console.log('This will never run again.');
};
runOnce();

// IIFE
(function () {
  console.log('This will never run again.');
  const isPrivate = 23;
  console.log(isPrivate);
  var notPrivate = 46;
})();

// console.log(isPrivate); // It's will be error message
// console.log(notPrivate); // It's will be error message too

{
  var isNotPrivate = 35;
}

console.log(isNotPrivate);

const runOnce2 = () => console.log('This will ALSO never run again.');
runOnce2();

// IIFE
(() => console.log('This will ALSO never run again.'))();

//------------
// Closures
//------------

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passenger`);
  };
};

const booker = secureBooking();
console.log(booker); // This function has access and can modify the passengerCount variable
booker();
booker();
booker();

console.dir(booker);

console.log(secureBooking);
console.dir(secureBooking);

//-----------
// Example 01
//-----------

let f;

const g = function () {
  const a = 32;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f(); // f variable was defined outside in the global scope then as we assigned it a function in this the g function so right here at in still closed over the variable environment of the g function.
console.dir(f); // in the Scopes and in the Closure is b: 32

// re-assign the f function
h();
f();
console.dir(f); // in the Scopes and in the Closure is b: 777

//-----------
// Example 01
//-----------

const boardPassengers = function (n, wait) {
  const preGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers.`);
    console.log(`There are 3 groups, each with ${preGroup} passengers.`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(180, 3);
console.dir(boardPassengers);
