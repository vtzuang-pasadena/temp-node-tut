// Modules
// CommonJS
// every file in node is a module

// require always needs a path starting with dot slash

const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');

const secret = 'SUPER SECRET';
// console.log(names);

// console.log(data);

let hey = require('./7-mind-grenade');

sayHi('susan');
sayHi(names.john);
sayHi(names.peter);
// sayHi(data.singlePerson.name);

// 32:50
// https://www.youtube.com/watch?v=Oe421EPjeBE
