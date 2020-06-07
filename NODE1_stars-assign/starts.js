// In the function you want to receive 2 parameter, how many starts and what you want to write in between the stars
// 3 step linked to the steps in index.js
module.exports = (stars = 10, header = "hey") => {
  // if stars is equal to a number of stars that you will type like this in the console:   node index.js 30 kkk  ,print something like this, otherwise print "hey" if theres not a number of stars like so 'node index.js 5 kkk' BUT if you type node index.js 5 kkk , knowing that kaka is  the header, you will automatically see the stars plus the kkk:
  /*
 ****************************** 
 kkk 
 ******************************
*/

  console.log(` ${"*".repeat(stars)} \n ${header} \n ${"*".repeat(stars)}`);
};
