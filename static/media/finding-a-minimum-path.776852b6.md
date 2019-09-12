This is going to be the first series in my blog. This series focuses on interesting problems I've stumbled upon from the internet and past interviews.

Today's problem is worded as follows:
> Given a matrix of numbers. You start at left top corner and stop at right bottom corner. Maximize the minimum number in the path.

In other words, find the path of numbers with the smallest sum. Consider an example:
```python
matrix = [
    [1, 1, 1, 9],
    [9, 3, 9, 3],
    [1, 7, 6, 1],
    [4, 1, 2, 1]
]
```

The minimum path here is `1 -> 1 -> 3 -> 7 -> 1 -> 2 -> 1`, summing to a value of 16.

## The Solution
There's 2 approaches I considered when solving this problem: recursion and Dijkstra's algorithm.

### Recursion
This is the brute-force method: check every possible path and return the smallest sum. One may initially assume that for every cell, recursing on the bottom and righthand neighbouring cells will always yeild the smallest sum, but that's false. Consider a counter-example:
```python
[
    [ 1,  1,  1,  1,  1,  1],
    [99, 99, 99, 99, 99,  1],
    [ 1,  1,  1,  1,  1,  1],
    [ 1, 99, 99, 99, 99, 99],
    [ 1,  1,  1,  1,  1,  1],
    [99, 99, 99, 99, 99,  1],
    [99, 99, 99, 99, 99,  1]
]
```
*Here, the smallest sum is found on the path of all 1's, which involves moving leftward at some times.*

So this means that when we recurse on every cell, we must consider paths in all four directions. In order to prevent an infinite loop while doing this, we must utilize memoization.