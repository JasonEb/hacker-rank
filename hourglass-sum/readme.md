# 2D Array - Hourglass Sum
https://www.hackerrank.com/challenges/2d-array/problem

This problem involves 2D array examination. Current plan is to implement hour glass sum first, then 2D matrix traversal to examine each hourglass within the 2D array.

Initial submission was fine, but failed to account for negative sums. This was due to setting the initial `maxSum` value into 0, which is ignorant of negative values. For example, if the max sum is -6, then the initial of 0 prevents the program. Utilizing `Number.NEGATIVE_INFINITY`, we can now handle more negative sums. 

## References 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/NEGATIVE_INFINITY