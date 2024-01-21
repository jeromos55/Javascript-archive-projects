'use strict';

//-------------------------------------------------
// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// slice
let arr = ['a', 'b', 'c', 'd', 'e'];
console.log('--- slice ---');
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log(arr.slice([...arr]));

// splice

console.log('--- splice ---');
// console.log(arr.splice(2));
console.log(arr.splice(-1));
console.log(arr);
console.log(arr.splice(1, 2));
console.log(arr);

// reverse
console.log('--- reverse ---');
arr = ['i', 'h', 'g', 'f', 'e'];
console.log(arr.reverse());
console.log(arr);

// concat
let arr2 = ['a', 'b', 'c', 'd'];
console.log('--- concat ---');
console.log(arr2.concat(arr));
console.log([...arr2, ...arr]);

// join
console.log('--- join ---');
console.log(arr2.concat(arr).join('-'));

// at
console.log('--- at ---');
arr2 = [23, 11, 64];
console.log(arr2);
console.log(arr2[0]);
console.log(arr2.at(0));

// get last array element
console.log('--- last element ---');
console.log(arr);
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);

console.log('John'.at(0));
console.log('John'.at(-1));

// Looping array with for
console.log('--- for ---');
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}

// Looping array with for and indexes
console.log('--- for and indexes ---');
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

// looping array with foreach
console.log('--- foreach ---');

movements.forEach((movement) => {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
});

// looping array with foreach and indexes
console.log('--- foreach and indexes ---');

movements.forEach((movement, i) => {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
});

//-------------------------------------------------
// BANKIST APP

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// --- foreach with map ---
console.log('--- foreach with map ---');
currencies.forEach((value, key, map) => {
  console.log(`${key}: ${value}`);
});

// --- foreach with set ---
console.log('--- set ---');
const currenciesUnique = new Set(['USD', 'EUR', 'GBP', 'Pound', 'USD', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach((value, key, map) => {
  console.log(`${key}: ${value}`);
});

// --- map method ---
console.log('--- map method ---');
console.log(movements);

const eroToUSD = 1.1;
const movementsUSDfor = [];
for (const mov of movements) {
  movementsUSDfor.push(mov * eroToUSD);
}
console.log(movementsUSDfor);

const movementsUSD = movements.map(function (mov) {
  return mov * eroToUSD;
});
console.log(movementsUSD);

const movementsArrow = movements.map((mov) => mov * eroToUSD);
console.log(movementsArrow);

const movementsDescriptions = movements.map((mov, i, arr) => {
  // if (mov > 0) {
  //   return `Movement ${i + 1}: You deposited ${mov}`;
  // } else {
  //   return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
  // }
  return `Movement ${i + 1}: You ${
    mov > 3 ? 'deposited' : 'withdrew'
  } ${Math.abs(mov)}`;
});
console.log(movementsDescriptions);

//--- Create username ---
console.log('--- Create username ---');

const CreateUserName = function (user) {
  const userName = user
    .toLowerCase()
    .split(' ')
    .map((name) => name[0])
    .join('');
  return userName;
};

console.log(CreateUserName('Steven Thomas Williams'));

//--- Create usernames for accounts array ---
console.log('--- Create usernames for accounts array ---');

const CreateUserNames = function (accs) {
  accs.forEach((accs) => {
    accs.username = accs.owner
      .toLowerCase()
      .split(' ')
      .map((name) => name[0])
      .join('');
  });
};
CreateUserNames(accounts);
console.log(accounts);

// --- The filter method ---
console.log('--- The filter method ---');

const deposit = movements.filter((mov) => mov > 0);
const withdraw = movements.filter((mov) => mov < 0);
console.log(movements);
console.log(deposit);
console.log(withdraw);

// --- The reduce method ---
console.log('--- The reduce method ---');

// acc --> accumulator, mov --> movements, i --> index, arr --> array, 0 --> initial value
const balance = movements.reduce((acc, mov, i, arr) => {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + mov;
}, 0);
console.log(balance);
