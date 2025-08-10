// Michael Martins 2025 - Leetcode challenge
// To run, execute node code.js

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

/**
 * Problem: Two sum
 * Difficulty: Easy
 * 
 * Approach:
 */

const target = 22;
const nums = [2, 7, 11, 15];

function twoSum(nums, target){
    const map = new Map();
    console.log(map);

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (map.has(complement)) {
        return [map.get(complement), i];
        }
        
        map.set(nums[i], i);
    }
    
    return [];  
}

console.log(twoSum(nums, target));