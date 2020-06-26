# Mark and Toys
Mark and Jane are very happy after having their first child. Their son loves toys, so Mark wants to buy some. There are a number of different toys lying in front of him, tagged with their prices. Mark has only a certain amount to spend, and he wants to maximize the number of toys he buys with this money.

Implementation was easy since I used the built-in sort API. The approach was to sort the prices, then grab as many as I can get within the budget. Given that this question was under the categories of "Sortin" and "Greedy Algorithms", that gave me the impression to sort and go for the most useful results first. 

Reading the discussion, I feel like a bubble sort implementation would be more closely resemble how a human would approach it. However, that would be much more time complexity and won't be as efficient as a sorting first, then iterating one more time.