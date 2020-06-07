const args = process.argv.slice(2);
//
//
//
function parseNum(arg) {
  const number = parseFloat(arg);
  //
  //
  if (isNaN(number)) {
    console.log(`Sorry, ${arg} is not a number, Please try again`);
    process.exit();
  }
  return number;
}
// ------
// ------
// step2 SWITCH
function sum(numArray) {
  return numArray.reduce((sum, n) => sum + n, 0);
}
// ------
// ------
const [operation, ...rest] = args;
console.log(operation);
const numbers = rest.map(parseNum);

// ------
// ------
//  SWITCH

// step1 SWITCH
switch (operation) {
  //for each case you need a function like in step2 SWITCH
  case "sum":
    console.log(sum(numbers));
    break;
  case "avg":
    console.log(avg(numbers));
    break;
  /*default will act like an else, for example if you typed once the app is ready: 
  node average.js sum 3 5 6 7, it will give you 21, but what if you typed "division"
instead of sum, it s  not going to give you anything

    */
  default:
    console.log(
      "I cannot do it yet, please type 'sum' to calculate Sum or 'avg' to calculate  average"
    );
}
