/**
 * main Javascript file for the application
 *  this file is executed by the Node server
 */

// import the express module, which exports the express function
const express = require("express");

// invoke the express function to create an Express application
const app = express();

// to keep this file manageable, we will move the routes to a separate file
//  the exported router object is an example of middleware
app.use("/", require("./server/routes/router"));

// start the server on port 8080
app.listen(8080, () => {
  console.log("server is listening on http://localhost:8080");
});
