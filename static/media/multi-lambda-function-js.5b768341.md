This will be another series of mine that I call **neatbit**. A neatbit is a short post about a block of code that peaks my interest and has real-world applications. Today's code bit is a nested lambda Javascript function, and it makes this line of code make sense:
```javascript
f(4)(12)(33)
```
An example of a nested lambda function is:
```javascript
f = a => b => c => a+b+c // f(4)(12)(33) = 49
```
Here, *f* is a function that returns a function, which returns a function that returns a function!

Well that's great and all, but what about this function?
```javascript
g = (a, b, c) => a+b+c
```
It does the same thing, doesn't it?

Yes, but like all actions in programming that can be done in more than one way, there's a tradeoff, and it depends mostly on the context of the problem needing to be solved.
For this simple example, both *f* and *g* are identical. Like every student who just finished taking algorithms (CS 341 in UWaterloo), I was curious about the runtimes when executing both functions. 
Using this approach is sometimes cleaner than defining a single function with *x* parameters because it requires all fields to be known at once, whereas with a nested function, only one is needed at a time.