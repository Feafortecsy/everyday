[TOC]

# <font color=red size=4 face="sans-serif">两数之和</font>

## <font color=dodgerblue size=3 face="sans-serif">题目描述</font>

给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

示例:

``` JavaScript
const nums = [2, 7, 11, 15], target = 9；
nums[0] + nums[1] = 2 + 7 = 9；
return [0, 1];
```

## <font color=dodgerblue size=3 face="sans-serif">做题思路</font>

第一版：想到了冒泡排序，利用双重循环，使每一个元素与其他元素相加，若与target相等，即返回这两次循环的索引。

假第二版：有多种结果，返回结果的数组。

第二版：不能利用重复元素，所以先行去重。
