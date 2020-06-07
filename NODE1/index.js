// what is NodeJs?

// why NodeJs?

// process object
//console.log(process);
//console.log(process.argv);
//console.log(`Hey ${process.argv[2]}`);

// process.argv.forEach((item, i) => {
//   console.log(`${i} : ${item}`);
// });
const args = process.argv.slice(2);
console.log(args);
console.log(`Hey ${args[0]}`);
//
//
//
// fs (File System) built-in module in NodeJs
//require is import
//fs is a module build in node,fs file system
const fs = require("fs");
// read file
fs.readFile("./newText.txt", "utf8", function (err, data) {
  //
  //   if (err) throw err;
  //   This is going to work only if i make an error in the previous step (step1)
  if (err) throw err;
  console.log(data);
});
// write file
// write file and readFile are ASYNC funtions by origin
fs.writeFile("new.txt", "This is created file in NodeJs", (err) => {
  if (err) throw err;
  console.log("Done 👍🏻");
});
//Synchronous will block anything beneath // ASYNCchronous
/*
  "Flower come before the 'data' even if its possitioned at the end or beneath the data txt file, and that is  because we are using asynchronous, asynchronous will push the function in the bg until its ready and while its doing it, it will show the flower in the beginning"
*/

console.log("Flower Power");
