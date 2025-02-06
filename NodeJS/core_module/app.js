const util = require('util');

const name = 'Asef';
const greeting = util.format('Hello, %s', name);
console.log(greeting);
//log is deprecated from util node core. 
util.log(greeting);