'use strict';

// Variables

console.log(me);
// console.log(job);
// console.log(year);

var me = 'John';
let job = 'attorney';
const year = 1991;

// Functions

console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addDecl);
console.log(addExpr);
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

var addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => {
  a + b;
};

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
