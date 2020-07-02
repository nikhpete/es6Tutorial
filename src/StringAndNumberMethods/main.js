let theString = 'Hello, my name is Nick and love learn JavaScript';

// case sentivity applies

// startsWith
console.log(theString.startsWith('Hell'));

//endsWIth
console.log(theString.endsWith('Script'));

//inlcudes
console.log(theString.includes('love'));

//Hex from ES5
console.log(0x2af);
//Binary from ES6
console.log(0b1010);
//Oct from ES6
console.log(0o171);

//isfinite
console.log(Number.isFinite(Infinity)); //false

//isNan
console.log(Number.isNaN(NaN)); //true

//isInteger
console.log(Number.isInteger(Infinity)); //false
