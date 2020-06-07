// ------
// ------1
//
//argv helps to access something i typed in the console
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
// -----------------------------
function avg(avgArray) {
  let lastIndex = avgArray.length - 1;

  let midItemIndex = lastIndex / 2;

  // avgArray.length correspond to the 4 numbers i will add in the console.
  // so it says if the 4 % 2 is equal to 1 then show this... else blah
  // you have to remember that if you type 1234, 4 numbers is "even" and it will give you the 'else' answer, but if you type an odd number like 1 2 3 4 5 so 5 numbers, it will give you the answer odd
  if (avgArray.length % 2 === 1) {
    console.log("we are odd");
    console.log(avgArray[midItemIndex]);
  } else {
    let middleItemIndex1 = Math.floor(midItemIndex);
    let middleItemIndex2 = Math.ceil(midItemIndex);
    console.log(avgArray[middleItemIndex1], avgArray[middleItemIndex2]);
  }
}
// ------
// ------2
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
instead of sum, it s  not going to give you anything, because it don't exist yet

    */
  default:
    console.log(
      "I cannot do it yet, please type 'sum' to calculate Sum or 'avg' to calculate  average"
    );
}
