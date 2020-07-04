'use strict';

//functions that can be paused and resumed

function* g1() {
  console.log('Hello');
  yield 'Yield 1st time'; //{done: false}
  console.log('World');
  // yield 'Yield 2nd time';  //{done:true}
  yield 'Yield 2nd time';
  return 'Returning..';
}

let c = g1();
c.next();
console.log(c.next().value);
console.log(c.next());

for (let val of g1()) {
  console.log(val);
}
