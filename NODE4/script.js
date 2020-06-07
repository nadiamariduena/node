//___1___
// export will export the sum function to the index.js
exports.sum = (x, y, z) => x + y + z;
exports.sub = (x, y, z) => x - y - z;
exports.mult = (x, y, z) => x * y * z;
//
//
// assign
exports.prepareString = (str) => {
  //   console.log(str);
  //   when you first add the split plus the loop and what it contains, you will find out that theres is a bug if you write a text like this inside the   console.log(helpText); in file messaging.js, if you notice, i purposely changed the middle words to uppercase.
  //   to avoid that you will have to add this line here :
  // str = str.toLowerCase(); , before the slit line, and that is because by doing so, you are tranforming everything to lowercase and then when the split will come you will only change the first letter of the index of each word.
  str = str.toLowerCase();
  //   if you remember this line, the strings with an space in between will cause that each element will be inside of a string and separate by a comma.
  str = str.split(" ");
  for (var i = 0, z = str.length; i < z; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].substr(1);
  }
  console.log(str.join(" "));
};
//
//
