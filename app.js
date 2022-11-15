//const http = require('http'); //removed because we are using express

//import expressjs
const express = require('express');

//import path module
const path = require('path');

//import our routing file
const adminRoutes = require('./routes/admin');

//import our shop routing file
const shopRoutes = require('./routes/shop');

//import body-parser
const bodyParser = require('body-parser');


//create an express application and store it in a constant by running
//express as a function
const app = express(); //initializes a new object where expressjs
//will store and manage a lot of things for us behind the scenes
//a lot of logic is in the app constant

//using middleware
//use allows us to add a new middleware function
// app.use((req,res,next) => {
//     console.log("In the middleware!");
//     next(); //Allows the request to continue to the next middleware in line
//     //use next to allow a request to move onto the next function
//     //you should send a response if you've got other plans
// }); 

//adding middleware that should be applied to all requests
// app.use('/', (req,res,next) => {
//     console.log("This is always runs");
//     next();
// })

//a body-parser middleware
app.use(bodyParser.urlencoded({extended:false}))

//put adminRoutes middleware to route to admins routes
app.use('/admin', adminRoutes);

//put shopRoutes middles to route to the shop routes
app.use(shopRoutes);

//sending a 404 page
app.use('/',(req,res,next) => {
    res.status(404).sendFile(path.join(__dirname,'views', '404.html'))
    //res.status(404).send('<h1>SORRY! PAGE NOT FOUND</h1>')
})

//the above two lines can be replaced with 
app.listen(3000);

// module.exports = path.dirname(require.main.filename);