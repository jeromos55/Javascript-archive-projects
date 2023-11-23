'use strict';

const john = {
  year: 1990,
  firstName: 'John',
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // -----------------------------------------------------------------------
    // this function made an error message because the 'this' call outside of the function
    // -----------------------------------------------------------------------

    // const isMillenial = function () {
    //   console.log(this);
    //   console.log(this.year >= 1982 && this.year <= 1996);
    // };
    // isMillenial();

    // -----------------------------------------------------------------------
    // 1. the solution to the problem of above
    // -----------------------------------------------------------------------

    // const self = this;
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1982 && self.year <= 1996);
    // };
    // isMillenial();

    // -----------------------------------------------------------------------
    // 2. the solution to the problem of above
    // (the arrow function has an inherit 'this object ' form the calcAge function)
    // -----------------------------------------------------------------------

    // const isMillenial = () => {
    //   console.log(this);
    //   console.log(this.year >= 1982 && this.year <= 1996);
    // };
    // isMillenial();
  },

  greet: () => {
    console.log(`Hey ${this.firstName}`); // arrow function hasn't this object
  },
};

john.greet();
// undefined because the arrow function hasn't 'this' object so it's a global object.
console.log(this); // golbal object is window object
console.log(this.firstName); // window object has't 'firstName'

var firstName = 'Maria'; // It has a global scope
john.greet(); // so that's 'Hey Maria'
john.calcAge(); // this is an error message because the 'this' try to call outside the function this isn't a regular function

// arguments keyword

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);

const addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

addArrow(2, 5);
