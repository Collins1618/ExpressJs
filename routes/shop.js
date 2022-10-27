//what the user sees
const express = require('express');

//use express to create a Router object
const router = express.Router();

router.get('/',(req,res,next) => {
    //express does not send a default response
    //we are sending a response here, ourselves
    res.send('<h1>Hello from Express!</h1>')
});

//export the shopRoutes
module.exports = router;