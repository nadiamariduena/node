// 1
const fs = require("fs");
//
// ---------------------asynchronous
// 2
// async
fs.copyFile("./original.txt", "copyFromOg.txt", (err) => {
  if (err) throw err;
  console.log("txt ratata copied");
});
// ---------------------asynchronous
//
//
//
// 3 always when you are graving a file, do it with const
//
// **************  *   *********************
// REPEAT , SYNCHRONOUS is a blocking code, it will stop everything from doing it, till is done, then will continue the task.
// REPEAT , ASYNCHRONOUS will throw it in the back, finish it then let it join the party.
//
//
// ---------------------Synchronous
//
const data = fs.readFileSync("longText.txt");
console.log(data.toString());
console.log("DOOONE");
//
//
//
// ---------------------Synchronous
//
// ---------------------------------------------------
// https://nodejs.org/docs/latest-v12.x/api/fs.html#fs_file_system_flags
//
// 'w': Open file for writing. The file is created (if it does not exist) or truncated (if it exists).
//
// everytime you will node index.js it will wipe out whatever you have inside the new.txt
fs.open("new.txt", "w", (err, data) => {
  if (err) throw err;
  //   console.log(data.toString()); it gives 30 but Hadi dont know why
  console.log("super duper");
});

/*
//RESULT OF THEse 3, look at the position of each due 
//to the async and synchronous


const fs = require("fs");

// 2
fs.copyFile("./original.txt", "copyFromOg.txt", (err) => {
  if (err) throw err;
  console.log("txt ratata copied");
});
// 3 always when you are grabing a file, always with const

const data = fs.readFileSync("longText.txt");
console.log(data.toString());
console.log("DOOONE");

// result****
YEPP LONG TEXT
DOOONE
txt ratata copied
*/
