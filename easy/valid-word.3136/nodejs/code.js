// Michael Martins 2025 - Leetcode challenge
// To run, execute node code.js
// This code checks if a word contains at least one vowel, one digit, and one consonant,
// and is at least 3 characters long.

/**
 * Problem: Valid Word
 * Difficulty: Easy
 * 
 * Approach:
 * - Use a regex to validate the word
 * - The regex checks for at least one vowel, one digit, and one consonant
 * - Ensure the word is at least 3 characters long
 */

const myWord = "aya";

const regex = /^(?=.*[aeiouAEIOU])(?=.*[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ])[a-zA-Z0-9]+$/;
function isValidword(word){
    if (word.match(regex) && word.length >= 3){
        return true;
    } else {
        return false;
    }
}
console.log(isValidword(myWord));