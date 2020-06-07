function getColor(name) {
  const colors = ["green", "rose", "brown", "azul"];
  const index = name.length % colors.length;

  return colors[index];
}
console.log(getColor("dom"));
// careful with the odd and the even 3 is an odd number so if you calculate 20 % 3 = 2 but if you do the same with 4 four of the four items inside the array ["green", "rose", "brown", "azul"]; , you will have this 20 % 4 = 0. its logic children stuff :)
//
//
// 10 _:asdfghjklö is odd ----console.log(getColor("asdfghjklö"));
// answer: rose , because 10 % 3, which correspond to the 3 of the length will give me 1, which is the position of the rose
// test it here :  https://miniwebtool.com/quotient-and-remainder-calculator/?dividend=10&divisor=3
