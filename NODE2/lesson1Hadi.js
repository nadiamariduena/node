/*
const args = process.argv.slice(2);
// arg is all what i type in the console
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

const [operation, ...rest] = args;
const numbers = rest.map(parseNum);

// sum 3 5 6 kdfgn
*/
//
//
//
//

// -------------------------description-----------------

// 1 check the notebook to understand this below
// this below is an array
const args = process.argv.slice(2);
//
//
//

// step 4
//(arg) is the ...rest data of the array
// i want to receive them one by one because of the map
function parseNum(arg) {
  const number = parseFloat(arg);
  //
  //
  if (isNaN(number)) {
    console.log(`Sorry, ${arg} is not a number, Please try again`);
    // arg is what the user will enter
    process.exit();
  }
  return number;
}

//
//
//
// small calculator
// 2
// when i don't know how many index for that array i have,  i use '...' the spread operator
//the 1 index of my array in (step1) will reside/live in operation and the rest will live in ""...rest"
const [operation, ...rest] = args;
//
// 3
// check if it s a real number by calling a function you will create in step 4.
const numbers = rest.map(parseNum);
// map is going to walk inside the now transformed  array "...rest" that is args, to SEE if there is any numbers.
//(parseNum) is the name of the function in step 4
//
//
//
// sum 3 5 6 kdfgn
