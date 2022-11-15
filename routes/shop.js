//what the user sees
const path = require('path');

const express = require('express');

const rootDir = require('../util/path')


//use express to create a Router object
const router = express.Router();

router.get('/',(req,res,next) => {
    //express does not send a default response
    //we are sending a response here, ourselves
    // res.send('<h1>Hello from Express!</h1>')
    res.status(404).sendFile(path.join(rootDir,'views', 'shop.html'))
});

//export the shopRoutes
module.exports = router;