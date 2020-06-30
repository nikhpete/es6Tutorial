// var a = 'hello';
// let b = 'hi';

function testVar() {
  var a = 30;
  let b = 30;
  if (true) {
    var a = 50;
    let b = 50;
    console.log('a local ' + a);
    console.log('b local ' + b);
  }
  console.log('a global ' + a);
  console.log('b global ' + b);
}

testVar();

const colors = [];
colors.push('black');
colors.push('red');

// colors = 'green';    not allowed
console.log(colors);
