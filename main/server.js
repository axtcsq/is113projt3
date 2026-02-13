// Required Codes
const express = require("express");
const server = express();

// POST
// server.use(express.urlencoded({ extended: true }));

// STATIC FILES
// const path = require("path");
// server.use("/", express.static(path.join(__dirname, "public")));

// VIEW ENGINE
server.set("view engine", "ejs");

// START Code
server.get("/", (req, res) => {
    res.send("This is working.");
})





// END Code

// Define the hostname and port for the server
const hostname = "127.0.0.1";
const port = 8000;

// Start server and listen for incoming requests
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});