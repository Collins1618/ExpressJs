//this is the route that handles the creation of products which the admin
//of the shop can do
const path = require('path');

const express = require('express');

//using express router
const router = express.Router();


router.get('/add-product',(req,res,next) => {
    // console.log("In another middleware!");
     //express does not send a default response
     //we are sending a response here, ourselves
    // res.send('<form action = "add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>')
     res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'))
     //if a request matches /add-product, the next middleware is not
     //going to be executed because we are not calling next()
     //even though it would have matched that request too
 });
 
 //to filter for only post requests we use app.post instead of app.use
 //the same can be done for get requests with app.get();
 router.post("/add-product", (req,res, next) => {
     console.log(req.body);
     res.redirect("/");
 } )


//exporting that router you created
module.exports = router;