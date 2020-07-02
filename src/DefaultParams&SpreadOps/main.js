'use strict';

function takeSomeData($abc = 'default data') {
  console.log($abc);
}

takeSomeData();

let args1 = [1, 2, 3];
let args2 = [4, 5, 6];

function test() {
  console.log(args1 + ',' + args2);
}

//old way
test.apply(args1);
//spread operation
test(...args1, ...args2);
