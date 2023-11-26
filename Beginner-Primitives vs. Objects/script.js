'use strict';

let age = 30;
let oldAge = age;
age = 31;

console.log(age);
console.log(oldAge);

const me = {
  name: 'John',
  age: 31,
  family: ['Katie', 'Eva'],
};

const friend = me;

friend.age = 27;

console.log('Me: ', me); // age: 27
console.log('Friend: ', friend); // age: 27 -> friend is called a reference from me

const copyFriend = Object.assign({}, friend);
copyFriend.age = 20;

// The me, friend are same as reference but the copyFriend is other
console.log('Copy of friend: ', copyFriend);

copyFriend.family.push('Jesica');

console.log('Me: ', me);
console.log('Friend: ', friend);
console.log('Copy of friend: ', copyFriend);
