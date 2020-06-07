// Recap from yesterday
//
// 1 important!!! you need to add require before start using the fs in step two, to create the file
const fs = require("fs");
//
// 2 create a file and send a message when there s an error

fs.writeFile(
  "./new.txt",
  "This text is done by NodeJs  :) and some new text",
  (err) => {
    if (err) throw err;
    console.log("Done");
  }
);
//
//
// 3 append / create a new file
fs.appendFile("new2.txt", "Second file done", (err) => {
  if (err) throw err;
  console.log("yeah done!!");
  // when you type node intro2:modules.js in the console, its going to append a new file called new2.txt, if you decided to type a second time a milisec after, its not going to create a new one because it only works for one at the time.
});
/*
fs.writeFile("./text/new.txt", "This text is done by NodeJs :)", (err) => {
  if (err) throw err;
  console.log("Done :D");
});
*/
//
//
//
// 4 read a file
//
fs.readFile("./longText.txt", "utf8", function (err, data) {
  if (err) throw err;
  console.log(data);
});
//
//
//
// 5 rename a file, first create a txt file called hello.txt then change it to hi.txt
//
/*
fs.rename("./hello.txt", "./hi.txt", (err) => {
  if (err) throw err;
  console.log("Succesfully ranamed helo for history.txt");
});
//
// ONCE you type a second time, you will see that something else happened, of course it did change the hello for a hi but now you have an error because it cannot find the hello
*/
//
//
//
//
//
// 6 delete file
//
fs.unlink("./hi.txt", (err) => {
  if (err) {
    console.log(err);
    return;
  }
});
//it will delete the hi file from the moment i type node intro2_modules.js on the console
