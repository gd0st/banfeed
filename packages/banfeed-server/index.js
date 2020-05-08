// Imports the babel library to transpile our code
require('babel-core/register');

// Import server code
exports = module.exports = require('./app/server');
