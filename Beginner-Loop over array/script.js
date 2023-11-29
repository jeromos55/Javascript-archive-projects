'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]; // returns an array containing  two elements
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderPasta: function (inc1, inc2, inc3) {
    console.log(
      `Here is your delicious pasta with ${inc1}, ${inc2} and ${inc3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

console.log('--- for-of-loop ---');
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

for (const items of menu) {
  console.log(items);
}

console.log(...menu);

console.log(menu.entries());

console.log(...menu.entries());

for (const items of menu.entries()) {
  console.log(items);
}

for (const items of menu.entries()) {
  console.log(`${items[0] + 1}: ${items[1]}}`);
}

for (const [item, elemment] of menu.entries()) {
  console.log(`${item + 1}: ${elemment}}`);
}
