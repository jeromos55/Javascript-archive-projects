'use strict';

console.log(this); // window object

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); // undefine
};

calcAge(1991);

// in arrow functions

const calcAgeArrow = (birthYear) => {
  console.log(2037 - birthYear);
  console.log(this); // window object
};

calcAgeArrow(2000);

// in an object

const john = {
  year: 1990,
  calcAge: function () {
    console.log(this); // this is object itself
    console.log(2037 - this.year); // It's 47 because this.year calls john.year
  },
};

john.calcAge();

const maria = {
  year: 2017,
};

maria.calcAge = john.calcAge; // now the maria object has a calcAge function
maria.calcAge(); // 20 because in the calcAge function the this.year calls maria.year

const f = john.calcAge;
f(); // this is error because the f function isn't a regular function because this.year not exists so htis is undefined
