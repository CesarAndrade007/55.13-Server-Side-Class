// define a variable and palce into it the http package (shared code) from node.js
let myhttp = require("http");

// use dot notation in javascirpt to access an object and its methods (commands) and properties 

// createServer() takes soem arguments to make it provide a useful http server
// 1: function (block of code) that will be run whenever the server receives an http request. 

let myserver = myhttp.createServer(
  // createServer() uses our function to run when a request comes in
  function(myrequest, myresponse) {
    console.log(myrequest.url);

    let mytext;
    if ( myrequest.url === "/page2") {
      mytext = "Woah, that's crazy. You really thought there was a second page?";
    } else {
      mytext = "This is a test!";
    }
    
    // writeHead() creates an http response header, including the status code (200 OK), the content type
    myresponse.writeHead( 200, { "Content-Type": "text/plain" } );

    // end() returns some data and closes the repsonse (sends it)
    myresponse.end( mytext + "\n" );
  }
);

// ask http to start listening on a tcp port for in comnig http requests
// Listen() takes 2 args: 1: tcp port #, string of the ip address (0.0.0.0)
myserver.listen(8080, "0.0.0.0");
console.log("server has started");