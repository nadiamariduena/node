// _1
const fs = require("fs");

// _2 declare your writer
let writer = fs
  .createWriteStream("newBigTest.txt", { flag: "wx+" })
  .on("error", (er) => {
    console.log(er);
  })

  // __6
  //    apply another listener
  .on("open", function (fileData) {
    console.log("file is open");
    console.log(`file data : ${fileData}`);
  });

//   3
writer.write("Hi this is a new Fileee done by Node.js");
// __7
//   Create a new writer

let newWriter = fs.createWriteStream("newText.txt", { flags: "w" });
newWriter.on("pipe", () => {
  console.log("yeahhh pipe is working on");
});
// _8
let reader = fs.createReadStream("newText.txt").pipe(newWriter);
//
//
//
//
//
//
//
//
// -----------------------------------------------------------descrip
/*
// _1
const fs = require("fs");

// _2 declare your writer
//
// wx+ it will trow error if the file exist
// w will write the file whenever the case, if there is a file or not
// .on ('error ')...this means that whenever i have an error i want to be informed about it.
// .on , works like an event listener
let writer = fs
  .createWriteStream("newBigTest.txt", { flag: "wx+" })
  .on("error", (er) => {
    console.log(er);
  })
  //
  //
  // __6
  //    apply another listener
  .on("open", function (fileData) {
    console.log("file is open");
    console.log(`file data : ${fileData}`);
  });
//
//
//   3
writer.write("Hi this is a new Fileee done by Node.js");

// 4__ ONCE you finish the first 3 steps, type inside the console: node index.js,
// it s going to automatically create the file "newBigTest.txt"
// DUE to the fact the file is already created then it s going to trow an error if you typed node index.js
// and that is because it exists, but if instead of wx+ you typed w, you will notice,
// that it dont create a new file or trow an error, what its going to do is OVERWRITE IT.
// 5_change the w for wx+ again, because we want an error
//
//
//
// __7
//   Create a new writer

let newWriter = fs.createWriteStream("newText.txt", { flags: "w" });
newWriter.on("pipe", () => {
  console.log("yeahhh pipe is working on");
});
//
//
//
// _8
let reader = fs.createReadStream("newText.txt").pipe(newWriter);
*/
