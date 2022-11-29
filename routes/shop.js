const path = require('path');

const express = require('express');

const productsController = require('../controllers/products')
//the two lines below were removed after adding controllers in products.js
// const rootDir = require('../util/path');
// const adminData = require('./admin');

const router = express.Router();

router.get('/', productsController.getProducts);

module.exports = router;
