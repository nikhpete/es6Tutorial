'use strict';
/*
let myArray = [11, 22, 34, 65, 34];
let mySet = new Set(myArray);

//add
mySet.add('100');
mySet.add({ a: 1, b: 2 });

console.log(mySet.values());

//delete
mySet.delete(22);
console.log(mySet);

//clear
mySet.clear();
console.log(mySet);

mySet.add('200');

//forEach
mySet.forEach(function (val) {
  console.log(val);
});
*/

/*
let myMap = new Map([
  ['a1', 'hello'],
  ['b1', 'goodbye'],
]);

//add
myMap.set('c1', 'foo');

//delete
myMap.delete('a1');

console.log(myMap);
*/

/*
let carWeakSet = new WeakSet();

let car1 = {
  make: 'honda',
  model: 'civic',
};

carWeakSet.add(car1);
let car2 = {
  make: 'toyota',
  model: 'etios',
};

carWeakSet.add(car2);

carWeakSet.delete(car1);

console.log(carWeakSet);
*/

let carWeakMap = new WeakMap();

let key1 = {
  id: 1,
};
let car1 = {
  make: 'honda',
  model: 'civic',
};

carWeakMap.set(key1, car1);

let key2 = {
  id: 2,
};
let car2 = {
  make: 'toyota',
  model: 'etios',
};
carWeakMap.set(key2, car2);

console.log(carWeakMap);
