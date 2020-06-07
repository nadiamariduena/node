// __ASSIGNMENT related__
const { prepareString } = require("./script");
// the following is linked to the messaging.js file
const { showHelp } = require("./messaging");
const args = process.argv.slice(2);

//
//the --help content is inside the file messaging.js
if (args.includes("--help")) {
  showHelp();
}
//
prepareString("heLlo peOple");
