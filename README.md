# Lucene Query Parser for JavaScript

This is an implementation of the Lucene Query Parser developed using PEG.js.

## Example

A quick example of how to use it:

```javascript
var parser = require('lucene-query-parser');

// return the expression tree
var results = parser.parse('title:"The Right Way" AND text:go');

console.log(results['left']['field']);      // title
console.log(results['left']['term']);       // The Right Way
console.log(results['operator']);           // AND
console.log(results['right']['field']);     // text
console.log(results['right']['term']);      // go
```

A slightly more complicated example:

```javascript
var parser = require('lucene-query-parser');

// return the expression tree
var results = parser.parse('test AND (foo OR bar)');

console.log(results['left']['term']);       // test
console.log(results['operator']);           // AND

// the grouped expression in parentheses becomes it's own nested node
var rightNode = results['right'];

console.log(rightNode['left']['term']);     // foo
console.log(rightNode['operator']);         // OR
console.log(rightNode['right']['term']);    // bar
```

## Installation

### On the Command-Line

The library is available as an npm module.

To install, run:

```
npm install lucene-query-parser
```

### In the Browser

In the browser, use RequireJS to load the AMD compatible module. In the example below, it assumes there's a `~/vendor` directory for third-party libraries, with RequireJS in `~/vendor/requirejs/require.js` and our library in `~/vendor/lucene-query-parser/lucene-query-parser.js`.

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- RequireJS -->
    <script type="text/javascript" src="vendor/requirejs/require.js"></script>
    <!-- RequireJS -->
    <script type="text/javascript">
      require.config({
        baseUrl: './vendor/lucene-query-parser/'
      });

      require(['lucene-query-parser.js'], function(lucenequeryparser) {

        // Use the Lucene Query Parser library here

        var results = lucenequeryparser.parse('example: query');
        console.log(results);
      });
    </script>
  </head>
  <body>
    <!-- ... -->
  </body>
</html>
```

## Unit Tests

Unit tests are built with [Jasmine](http://pivotal.github.com/jasmine/).

### On the Command-line

To run the unit tests on the command line, using node:

```
npm test
```

### In the Browser

To run the unit tests, just open [SpecRunner.html](https://rawgithub.com/thoward/lucene-query-parser.js/master/spec/SpecRunner.html) in any browser.


## Grammar

The parser is auto-generated from a PEG implementation in Javascript called [PEG.js](http://pegjs.majda.cz/).

To test the grammar without using the generated parser, or if you want to modify it, try out [PEG.js online](http://pegjs.majda.cz/online>). This is a handy way to test an abritrary query and see what the results will be like or debug a problem with the parser for a given piece of data.


## Community

If you'd like to help out with the project, or if you have a question, feel free to contact Troy Howard at thoward37@gmail.com.

Bug reports or feature requests should go in the GitHub [issue tracker](https://github.com/thoward/lucene-query-parser.js/issues). Please include relevant sample data (the query) and a good description of the challenges you're facing.

Look to the [wiki](https://github.com/thoward/lucene-query-parser.js/wiki) for additional documentation and other resources.