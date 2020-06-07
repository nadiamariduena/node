//step 1 __ is in script.js
// The lesson of the day is about "how to export" specific functions from other files, until now we know how to import the data from a whole file, but what about importing just one function for example.
//
// so this is how you import one function from a library in react:  { sum }
// __2__
// this way will make the code cleaner
const { sum, sub, mult } = require("./script");

// const { sub } = require("./script");
// const { mult } = require("./script");

//
const args = process.argv.slice(2);
//
//
// this correspond to the numbers you will want to calculate on the console, for example if you have 1 2 3 you will need 3 lines of the data below with different vars etc
let x = parseFloat(args[0]);
let y = parseFloat(args[1]);
let z = parseFloat(args[2]);
//
console.log(`x + y + z = ${sum(x, y, z)}`);
console.log(`x - y - z  = ${sub(x, y, z)}`);
console.log(`x * y * z  = ${mult(x, y, z)}`);

//  type this one the console: node index.js 2 4
// result : x + y = 6
