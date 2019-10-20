I believe that [Babel's compiler](https://babeljs.io/repl/build/master){:target="_blank"} is the best tool to use to fundamentally understand how ES6 syntax works.

## Examples
Each one of these code snippets were compiled using the link above.
###  Lambda Functions and Context
Let's define two functions that return the `key` field of whichever object that called it:
```javascript
// ES6 syntax
const fn = () => this.key;

const fn2 = function() { return this.key; }
```
Compiling results in: 
```javascript
// Pre-ES6
"use strict";

var _this = void 0;

var fn = function fn() {
  return _this.key;
};

var fn2 = function fn2() {
  return this.key;
};
```
The classic function's `this` keyword is dynamic, whereas its constant for the lambda function. Lambda functions refer to the context of whatever encapsulating object its in *lexically* &#8212; lexically meaning "as the code was written". 
```javascript
export const fn = () => this

// File 2
const obj = {
  key: 42,
  f: require('./file.js'),
};

obj.f(); // void 0
```