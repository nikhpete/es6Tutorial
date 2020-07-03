'use strict';

function Prefixer(prefix) {
  this.prefix = prefix;
}

//no arrow function
Prefixer.prototype.prefixArray = function (arr) {
  let self = this; // avoided in arrow function
  return arr.map(function (val) {
    console.log(self.prefix + val);
  });
};

//with arrow function: use of lexical this
Prefixer.prototype.prefixArrayArrow = function (arr) {
  return arr.map(val => {
    console.log(this.prefix + val);
  });
};

let pre = new Prefixer('Hello ');
pre.prefixArray(['Nick', 'Siva', 'Hari']);
pre.prefixArrayArrow(['Nick', 'Siva', 'Hari']);

let add = (a, b) => {
  return a + b;
};

console.log(add(10, 2));
