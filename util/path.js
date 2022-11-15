//Here we want to export a function that helps us construct a path
//to the parent directory

const path = require('path');

module.exports = path.dirname(require.main.filename);