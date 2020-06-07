const http = require("http");

// first you will create a function that will have a request and a response.
//
//--- REQUEST is what i want from the server. ---
//--- RESPONSE is what the server is giving me back ---
//
// _you will always refer to request with req and response with res, you can use whatever you want but its more commun to use these abbr
const requestListener = function (req, res) {
  res.writeHead(200);
  res.end("HEY i am a server");
};
// library http
const server = http.createServer(requestListener);
// What is a localhost 8080?   Localhost is basically a local server that allows you to host your website online on a local IP that is visible only in your system, by connecting to another host computer or web server like Apache Web Server. 8080 is the port address through which you can access your localhost's dashboard.
server.listen(8080);
// after you type node index.js you will see a white block, it means its listening
//
//
//
//
//
//
/*                             5 Reasons Why You Should Make Your Own Server
https://www.makeuseof.com/tag/5-reasons-server/

https://dev.to/kardelio/3-different-ways-to-start-a-http-web-server-from-the-terminal-4am3


Make a Server, Control Your Data

We know what you’re thinking—why have a home server if you can just use a service like Google Drive or Dropbox?
The most critical difference between home servers and third-party cloud services is the control of data.
Contrary to some beliefs, Google Drive et al. do not own the data which you upload to the cloud. The companies do, however, retain a license to reproduce, modify, and create derivative works from your files.




*/
