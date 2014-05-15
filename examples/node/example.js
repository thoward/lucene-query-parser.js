// if installed via npm (npm install lucene-query-parser)
// var parser = require('lucene-query-parser');

// if running from source repo:
var parser = require('../../lib/lucene-query-parser.js');

// return the expression tree
var results = parser.parse('title:"The Right Way" AND text:go');

console.log(results['left']['field']);      // title
console.log(results['left']['term']);       // The Right Way
console.log(results['operator']);           // AND
console.log(results['right']['field']);     // text
console.log(results['right']['term']);      // go
