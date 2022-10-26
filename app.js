const http = require('http');

//import expressjs
const express = require('express');

//create an express application and store it in a constant by running
//express as a function
const app = express(); //initializes a new object where expressjs
//will store and manage a lot of things for us behind the scenes
//a lot of logic is in the app constant

const server = http.createServer(app); //app is a valid request handler


server.listen(3000);