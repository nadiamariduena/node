const fs = require("fs");
const zlib = require("zlib");
const path = require("path");

const [filePath = path.join(__dirname, "input.txt")] = process.argv.slice(2);
const stream = fs
  .createReadStream(filePath)
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream(filePath + ".gz"));
stream.on("close", () => console.log("Done yeeeep"));
//
//
//
/*------------------------------------------  EXPLANATION  ------------------------------------
// 
const fs = require("fs");
const zlib = require("zlib");
const path = require("path");
// path is a library from NODE js
// path will convert the normal text to address
// so for example you pass random names like so:

//    path.join('/hello1', 'hello2')
//it will be converted like that:
//   '/hello1/hello2'

// 2 underscore here (__dirname)
// console.log(__dirname);

//const [filePath, ...rest] = process.argv.slice(2); //['index.txt', 'Hi', 'cool'] index will live in filePath and the other 2 hi and cool will live in ...rest

//
// Now you need to add the default value, because sometimes the user will not enter the file
// = path.join(__dirname, "input.txt")] this default value will take over only if the process.argv.slice(2) was UNDEFINED,
// this process.argv.slice(2) is the stuff you write in the console
const [filePath = path.join(__dirname, "input.txt")] = process.argv.slice(2);
//
//
// Whenever i need to read any Huge file, i need to STREAM IT, because i dont want to block the memory, i dont want to use the whole server capacity to render one file, so i will always take the elephant in small parts
const stream = fs
  .createReadStream(filePath)
  // after reading the stream, i want to pipe, i want to take pieces and process, so when the elephant is going into that pipe, i want to apply things "NOT THE WHOLE ELEPHANT but pieces of it"
  .pipe(zlib.createGzip())
  // i want to create a zip out of it, and also i want to pass it to another pipe
  .pipe(fs.createWriteStream(filePath + ".gz"));
//.pipe(fr.createWriteStream(filePath + ".gz"));    i want to create a file out of the file path and i want to add the extention that gzip gave me so .gz

// NOW i want to add an event listener...on the on is an event listener here
stream.on("close", () => console.log("Done yeeeep"));
*/
