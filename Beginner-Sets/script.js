'use strict';

const orderSet = new Set([
  'Neuer',
  'Pavard',
  'Martinez',
  'Neuer',
  'Pavard',
  'Martinez',
  'Lewandowski',
]);

// Sets has uniqe element and the Sets hasn't index
console.log('--- Sets ---');
console.log(orderSet);

console.log(orderSet.size, new Set('John'));

console.log(orderSet.has('John'), orderSet.has('Neuer'));

orderSet.add('Kimmich');
orderSet.add('Kimmich');

console.log(orderSet.size, orderSet);

orderSet.delete('Pavard');
console.log(orderSet.size, orderSet);

// orderSet.clear();
// console.log(orderSet.size);

console.log('--- Looping ---');
for (const item of orderSet) {
  console.log(item);
}

console.log('--- Example ---');
const staffArray = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Waiter', 'Chef'];
console.log(staffArray.length, staffArray);

const staffUnique1 = new Set(staffArray); // or
console.log(staffUnique1.size, staffUnique1);

const staffUnique2 = [...new Set(staffArray)]; // or
console.log(staffUnique2.length, staffUnique2);

const staffUnique3 = new Set([
  'Waiter',
  'Chef',
  'Waiter',
  'Manager',
  'Waiter',
  'Chef',
]);
console.log(staffUnique3.size, staffUnique3);
