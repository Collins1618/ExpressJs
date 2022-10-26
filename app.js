//const http = require('http'); //removed because we are using express

//import expressjs
const express = require('express');

//import body-parser
const bodyParser = require('body-parser')

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

app.use('/add-product',(req,res,next) => {
   // console.log("In another middleware!");
    //express does not send a default response
    //we are sending a response here, ourselves
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>')
    //if a request matches /add-product, the next middleware is not
    //going to be executed because we are not calling next()
    //even though it would have matched that request too
});

app.use("/product", (req,res, next) => {
    console.log(req.body);
    res.redirect("/");
} )

app.use('/',(req,res,next) => {
    //express does not send a default response
    //we are sending a response here, ourselves
    res.send('<h1>Hello from Express!</h1>')
});

//const server = http.createServer(app); //app is a valid request handler
//server.listen(3000);

//the above two lines can be replaced with 
app.listen(3000);