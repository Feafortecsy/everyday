[TOC]

# <font color=red size=4 face="sans-serif">two sum</font>

## <font color=dodgerblue size=3 face="sans-serif">deacriptoon</font>

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

``` JavaScript
const nums = [2, 7, 11, 15], target = 9,

nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
```

## <font color=dodgerblue size=3 face="sans-serif">Thinking of doing questions</font>

First edition: Using double loops, each element is added to other elements. If it is equal to target, the index of these two loops is returned.

False Second edition: There are multiple results and an array of results is returned.

Second edition: Repeated elements cannot be used, so repetition is removed first.
