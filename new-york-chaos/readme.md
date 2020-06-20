
# New York Chaos

This problem seems to be based off bubble sort, in spirit. It gives a narrative to why a queue will swap, and ultimately the only tweak on the idea is counting the number of swaps while accounting for certain rules. 

The naive solution was implemented, but there are test cases that are meant for a more optimal implementation. In that regard it becomes interesting because Bubble Sort is O(n^2), but to optimize it will require accounting for the bubble sort like swaps while not implementing bubble sort.

Upon reading discussion and reviewing the material, the hacker rank solution is to avoid sorting altogether and target the actual question. Given that the values are consecutive, initial positions are provided, we can work with the limitation of maximum bribes of 2 by simply examining how much the position has dropped. 

Fortunately my code was in position to easily adopt this technique. For a minute I thought I was vastly overthinking this solution, but taking a step back allowed me to uninvest from the bubble sort implementation and look at it more simply. 