// 4 you will always require : import, on the top, that is why it s positioned here.
const print = require("./starts");

// 1 check the notebook to understand this below
const args = process.argv.slice(2);
// 2
// You can write the function here but it s preferable to use the module way, in which you have the function in     another file or "living in another module" , then you will export to this file again.

//_5
print(args[0], args[1]);

//

//

/*


// const print = require("./starts");
const args = process.argv.slice(2);
// print(args[0], args[1]);
function parseNum(arg) {
  //
  const number = parseFloat(arg);
  if (isNan(number)) {
    console.log(`Sorry, ${arg} is not a number, Please write again`);

    process.exit();
  }
  return number;
}
// ------------
// switch connected
function sum(numArray) {
  return numArray.reduce((sum, n) => sum + n, 0);
}

// ------------
const [operation, ...rest] = args;

const numbers = rest.map(parseNum);
// sum 3 5 6 kdfjb
// average -----------------------------------

switch (operation) {
  case "sum":
    console.log(sum(numbers));
    break;
  case "avg":
    console.log(avg(numbers));
    break;
  default:
    console.log(
      "I cannot do this, please type 'sum' to calculate or 'avg' to calculate "
    );
}
*/
