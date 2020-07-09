# Sorted Insert 

*Complete the sortedInsert function in the editor below. It must return a reference to the head of your modified DoublyLinkedList.*

This problem took much longer than anticipated, mainly due to an inadequate understanding of checking falsiness in JavaScript. I used to check for `null` with `typeof == 'undefined'`, but debugging and research revealed better ways. Namely just directly checking for `null`. 

I'm pretty happy that my initial implementation was just like as other implementations stood, but I needed to adapt my pointer technique and consider better edge cases