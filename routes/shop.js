const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
    //take products from admin data
    const products = adminData.products;
    //inject that data you took into our template
    res.render('shop', {prods: products, pageTitle: 'Shop', path:'/'});
});

module.exports = router;
