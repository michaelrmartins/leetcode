# 🚀 LeetCode Solutions by Michael Martins

![LeetCode Badge](https://img.shields.io/badge/LeetCode-Solutions-orange?style=flat-square&logo=leetcode)
![Languages](https://img.shields.io/badge/Languages-JavaScript%20%7C%20Python%20%7C%20Java-blue?style=flat-square)
![Last Commit](https://img.shields.io/github/last-commit/michaelrmartins/leetcode?style=flat-square&color=brightgreen)
![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)
[![Update README progress](https://github.com/michaelrmartins/leetcode/actions/workflows/update-readme.yml/badge.svg)](https://github.com/michaelrmartins/leetcode/actions/workflows/update-readme.yml)
A curated collection of my **LeetCode** problem solutions, written with clean code, detailed explanations, and different approaches whenever possible.

---


- **easy/** → Solutions for easy-level problems 🟢  
- **medium/** → Solutions for medium-level problems 🟡  
- **hard/** → Solutions for hard-level problems 🔴  

Each solution file includes:
1. Problem description (short summary)  
2. My approach & thought process  

---

## 🛠 Languages & Tools

- **JavaScript** (Node.js)  
- **Python** (3.x)  
- **Java** (OpenJDK 17)  

---

## 📈 Progress

| Difficulty | Problems Solved |                       Progress                      |
|------------|-----------------|-----------------------------------------------------|
| Easy       | 1               | ![](https://geps.dev/progress/1) |
| Medium     | 0               | ![](https://geps.dev/progress/0)|
| Hard       | 0               | ![](https://geps.dev/progress/0)|

---

## 📚 Example Solution Format

```javascript
/**
 * Problem: Two Sum
 * Difficulty: Easy
 * 
 * Approach:
 * - Use a hash map to store visited numbers
 * - Check if target - current exists in the map
 */

function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
}


---

License
This repository is licensed under the MIT License.


 I keep this repo updated as I solve new problems — feel free to ⭐ it and check back for updates!
