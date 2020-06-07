const zlib = require("zlib");
const gzip = zlib.createGzip();

const fs = require("fs");
const input = fs.createReadStream("input.txt");

const out = fs.createWriteStream("input.txt.gz");

input.pipe(gzip).pipe(out);

/*ZLIB

zlib is a software library used for data compression. zlib was written by 
Jean-loup Gailly and Mark Adler and is an abstraction of the DEFLATE compression
 algorithm used in their gzip file compression program. zlib is also a crucial
 component of many software platforms, including Linux, macOS, and iOS.

The Zlib module provides a way of zip and unzip files
https://www.w3schools.com/nodejs/ref_zlib.asp






// --------------------
// What is a node stream?
// --------------------

Streams are one of the fundamental concepts that power Node. js applications.
 They are data-handling method and are used to read or write input into output sequentially. 
 Streams are a way to handle reading/writing files, network 
communications, or any kind of end-to-end information exchange in an efficient way.

What makes streams unique, is that instead of a program reading a file into memory all at once like 
in the traditional way, streams read chunks of data piece by piece, processing its content without 
keeping it all in memory.

This makes streams really powerful when working with large amounts of data, for example, a 
file size can be larger than your free memory space, making it impossible to read the whole file 
into the memory in order to process it. That’s where streams come to the rescue!

https://nodesource.com/blog/understanding-streams-in-nodejs




// --------------------
// createReadStream()
// --------------------


createReadStream() allows you to open up a readable stream in a very simple manner.
All you have to do is pass the path of the file to start streaming in. It turns out 
that the response (as well as the request) objects are streams.

The createReadStream() method is an inbuilt application programming interface of fs 
module which allow you to open up a file/stream and read the data present in it

// --------------------
// createWriteStream()
// --------------------
// 
The function fs. createWriteStream() creates a writable stream in a very simple manner. ...
The fs.createWriteStream is an example of a writable stream, which differs from readable
 streams, and duplex streams. For example when it comes to piping data from one stream to 
 another a readable stream can pipe to a writable stream, 
but not the other way around, because there is nothing to read. 



// --------------------
// The pipe()
// --------------------
// 
The pipe() function reads data from a readable stream as it becomes available and writes it 
to a destination writable stream. 
The example in the documentation is an echo server, which is a server that sends what it receives.


*/
