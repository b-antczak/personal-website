This is going to be the first series in my blog. This series focuses on interesting problems I've stumbled upon from the internet and past interviews (although I will never disclose the interviewing company for privacy reasons).

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

# The Solution
There's 2 approaches I considered when solving this problem: recursion and Dijkstra's algorithm.

## Recursion
This is the brute-force method: check every possible path and return the smallest sum.
