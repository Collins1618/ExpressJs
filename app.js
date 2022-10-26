const http = require('http');

//import expressjs
const express = require('express');

//create an express application and store it in a constant by running
//express as a function
const app = express(); //initializes a new object where expressjs
//will store and manage a lot of things for us behind the scenes
//a lot of logic is in the app constant

//using middleware
//use allows us to add a new middleware function
app.use((req,res,next) => {
    console.log("In the middleware!");
    next(); //Allows the request to continue to the next middleware in line
    //use next to allow a request to move onto the next function
    //you should send a response if you've got other plans
}); 

app.use((req,res,next) => {
    console.log("In another middleware!");
});

const server = http.createServer(app); //app is a valid request handler


server.listen(3000);