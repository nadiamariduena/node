// After testing node index.js in the other folder, it didn't, its maybe due to the other modules or scss etc still to early to say, anyway i tried to do it here, in a clean folder that only contains a index.js that is not inside a folder and it worked,
//
// I could see all the modules once i typed node index.js
// PROCESS OBJECT
// console.log(process);

// console.log(process.argv);
// console.log(` Hello ${process.argv[2]}`);

// process.argv.forEach((item, i) => {
//   console.log(` ${i} : ${item} `);
// });

// ---------------------------------
//
const args = process.argv.slice(2);
console.log(args);
console.log(`Hey ${args[0]}`);
// --------------------------------

//require is import
//fs is a module build in node,fs file system
const fs = require("fs");

// if you write "bewtext" which is purposely wrong written, instead of ./newText.txt" , you will get an error and will see the other message  __HOLA__.
// readFile is a function build in fs node
//
// step1
fs.readFile("./test.txt", "utf8", function (err, data) {
  //   if (err) throw err;
  //   This is going to work only if i make an error in the previous step (step1)
  if (err) {
    fs.writeFile(
      "errorFile3.txt",
      "we overwrited the error" + err,

      (err) => {
        //if the file "errorFile.txt" has not been created or there s something wrong,we create error
        if (err) throw err;
        console.log("Error file created");
      }
    );
  }
  console.log(data);
});

// write file and readFile is ASYNC funtion
fs.writeFile(
  "new.txt",
  "with this method i will create a file in NodeJs",
  (err) => {
    if (err) throw err;
    console.log("DONE");
  }
);

//Synchronous will block anything beneath // ASYNCchronous
/*
  "Flower come before the 'data' even if its possitioned at the end or beneath the data txt file, and that is  because we are using asynchronous, asynchronous will push the function in the bg until its ready and while its doing it, it will show the flower in the beginning"
*/

console.log("Flower Power");
