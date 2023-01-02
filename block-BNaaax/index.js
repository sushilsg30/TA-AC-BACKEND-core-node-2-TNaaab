let path = require('path');

let realtivePath = './index.js';
// let absolutePath = __dirname;

// console.log(__dirname);
console.log(realtivePath);

// console.log(__dirname + './index.js');

let indexJoined = path.join(__dirname, 'index.js');
console.log(indexJoined);
