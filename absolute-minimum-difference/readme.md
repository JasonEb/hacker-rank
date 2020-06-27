# Minimum Absolute Difference in an Array

*Given an array of integers, find and print the minimum absolute difference between any two elements in the array. *

This problem's initial solution was to iterate and find all permutations of pairs within an array. This was an O(n^2) solution however, and did not pass larger tests due to runtime errors. The solution is to examine the problem carefully and optimize around that.

Given that we are looking for the smallest difference, we observe that consecutive numbers will always be the least different from another. Thus by sorting the array first, it'll naturally be in consecutive order. From there we can greedily examine adjacent numbers for the smallest absolute difference. This solution becomes a O(n log n) solution. 

