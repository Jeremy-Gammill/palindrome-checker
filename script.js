/**
 * Filename: script.js
 * Project: Palindrome Checker
 * Live Demo: https://jeremy-gammill.github.io/palindrome-checker/
 * 
 * Author: Jeremy Gammill | github.com/jeremy-gammill
 * Date Created: March 22, 2024
 * Last Modified: March 24, 2024
 * License: MIT
 * 
 * Description:
 *   Developed for the freeCodeCamp JavaScript Algorithms and Data Structures certification.
 *  
 *   Key Features:
 *   - Accepts text input from the user.
 *   - Cleans the string by removing all non-alphanumeric characters.
 *   - Evaluates the cleaned string to determine if it is a palindrome.
 */

"use strict";

const checkBtn = document.getElementById('check-btn');
const inputBox = document.getElementById('text-input');
const resultContainer = document.getElementById('result');

checkBtn.addEventListener('click', testPalindrome);

function inputIsEmpty(inputText) {
    return inputText === "";
}

function removeNonAlphanumeric(inputString) {
    return inputString.replace(/[^a-zA-Z0-9]/g, '');
};

function testPalindrome() {
    const inputText = (inputBox.value);
    const inputTextClean = removeNonAlphanumeric(inputText).toLowerCase();

    if (inputIsEmpty(inputText)) {
        window.alert('Please input a value');
    } else {
        resultContainer.innerHTML = `<strong>${inputText}</strong> is` +
            (textIsPalindrome(inputTextClean) ? "" : " not") + " a palindrome."
    }

    function textIsPalindrome(text) {
        const charsOriginal = text.split("");
        const charsReverse = [...charsOriginal].reverse();
        let isPalindrome = true;

        charsOriginal.forEach((char, i) => {
            if (char !== charsReverse[i]) {
                isPalindrome = false;
            }
        });

        return isPalindrome;
    }
}

/**
 * Potential Improvements:
 * 
 * - It occurs to me that performing the palindrome test directly on a string
 *   is likely more efficient than comparing the original and reversed arrays.
 *   For example, simply comparing from the front of the string vs. the end of
 *   the string may be more performant.
 * 
 * - This may be a good opportunity for refactoring in the future.
 */
