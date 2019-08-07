/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
*/

// 第一版
// const twoSum = (nums, target) => {
//     const Result = [];
//     for (let i = 0; i < nums.length - 1; i++) {
//         for (let j = 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 const SubResult = [];
//                 SubResult.push(i);
//                 SubResult.push(j);
//                 Result.push(SubResult);
//             }
//         }
//     }
//     return Result;
// };

// 假 第二版
// const twoSum = (nums, target) => {
//     const Result = [];
//     for (let i = 0; i < nums.length - 1; i++) {
//         for (let j = 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 const SubResult = [];
//                 SubResult.push(i);
//                 SubResult.push(j);
//                 Result.push(SubResult);
//             }
//         }
//     }
//     return Result;
// };

// 第二版
const twoSum = (nums, target) => {
    const Result = [];
    // 不能利用重复元素，所以先行去重
    // Repeated elements cannot be used, so repetition is removed first.
    const array = Array.from(new Set(nums));
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 1; j < array.length; j++) {
            if (array[i] + array[j] === target) {
                Result.push(i);
                Result.push(j);
            }
        }
    }
    return Result;
};
