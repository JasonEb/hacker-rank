# Two Strings

***Given two strings, determine if they share a common substring. A substring may be as small as one
character. For example, the words "a", "and", "art" share the common substring . The words "be" and "cat" do not
share a substring.***

The first naive implementation was creating two hash maps, or two javascript objects to collect the frequencies of every possible substring between the two strings. However, one can target the challenge's actual specifications and optimize. Namely, since any substring will count, then we can afford to not look at every possible substring.

Given the example cases, we can see that even a shared letter or character will suffice as a substring. Given the nature of substrings, subsequent substrings will contain that character. Therefore, we simply just have to keep a character frequency and check if any letter occurs more than once. 