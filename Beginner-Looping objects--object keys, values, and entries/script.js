'use strict';

const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const openingHours = {
  [weekdays[4]]: {
    open: 12,
    close: 22,
  },
  [weekdays[5]]: {
    open: 11,
    close: 23,
  },
  // [`day-${2 + 4}`]: {
  //   open: 0,
  //   close: 24,
  // },
  [weekdays[`${2 + 4}`]]: {
    open: 0,
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(inc1, inc2, inc3) {
    console.log(
      `Here is your delicious pasta with ${inc1}, ${inc2} and ${inc3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

const properties = Object.keys(openingHours);
console.log(properties);
console.log(`We are open on ${properties.length} days.`);

for (const day of Object.keys(openingHours)) {
  console.log(day);
}

// Property names
console.log('--- Properties names ---');
let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property values
console.log('--- Properties values ---');
const values = Object.values(openingHours);
console.log(values);

// Property entries
console.log('--- Properties entries ---');
const entries = Object.entries(openingHours);
console.log(entries);

// Property [key, value]
console.log('--- Property [key, value] ---');
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
