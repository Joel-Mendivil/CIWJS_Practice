// const langOne = document.querySelector(".langOne");
// const langTwo = document.querySelector(".langTwo");
// const langthree = document.querySelector(".langThree");
// const multLang = document.querySelector(".multLang");

// langOne.addEventListener('mouseover', () => {
//     langOne.classList.add("progress-bar-striped");
// })  

// langOne.addEventListener('mouseout', () => {
//     langOne.classList.remove("progress-bar-striped")
// })

// langTwo.addEventListener('mouseover', () => {
//     langTwo.classList.add("progress-bar-striped");
// })

// langTwo.addEventListener('mouseout', () => {
//     langTwo.classList.remove("progress-bar-striped");
// })


//Leet Code Problem 66 /////////////////////////////////////////////////////////////////////////
let digits = [1, 2, 3];
var plusOne = function (digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i] = digits[i] + 1;
            return digits;
        } else {
            digits[i] = 0;
        }
    }
    digits.unshift(1);
    return digits;
};

//Linear Search /////////////////////////////////////////////////////////////////////////
const unsortedArr = [31, 27, 28, 42, 13, 8, 11, 30, 17, 41, 15, 43, 1, 36, 9, 16, 20, 35, 48, 37, 7, 26, 34, 21, 22, 6, 29, 32, 49, 10, 12, 19, 24, 38, 5, 14, 44, 40, 3, 50, 46, 25, 18, 33, 47, 4, 45, 39, 23, 2];
const sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50];

const linear = (arr, target) => {
    let steps = 0;

    for (let i = 0; i < arr.length; i++) {
        steps++;
        if (arr[i] === target) return `Found: ${arr[i]} in ${steps} steps`;
    };
};

console.log(linear(unsortedArr, 40)); //40 steps in 40 Milliseconds
console.log(linear(sortedArr, 40)); //40 steps in 40 Milliseconds

//Binary Search /////////////////////////////////////////////////////////////////////////
const binary = (arr, target) => {
    let start = 0;
    let end = arr.length;
    let pivot = Math.floor((start + end) / 2);
    let steps = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[pivot] !== target) {
            if (target < arr[pivot]) end = pivot;
            else start = pivot;
            pivot = Math.floor((start + end) / 2);
            steps++;
        };

        if (arr[pivot] === target) return `Found: ${target} in ${steps} steps`;
    };

    return 'Nothing Found';
};

console.log(linear(unsortedArr, 40)); //Nothing Found
console.log(binary(sortedArr, 44)); //2 steps in 7 Milliseconds
console.log(binary(sortedArr, 43)); //5 steps in 8 Milliseconds

//Leet Code Problem 9 /////////////////////////////////////////////////////////////////////////
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) {
        return false;
    }

    let char = x.toString();
    let i = 0;
    let j = char.length - 1;

    while (i <= j) {
        if (!(char[i++] === char[j--])) {
            return false;
        }
    }

    return true;
};

//Leet Code Problem 34 /////////////////////////////////////////////////////////////////////////
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    const length = nums.length - 1;
    let start = 0;
    let end = length;
    let center;

    // get the center
    while (start <= end) {
        center = Math.floor((start + end) / 2);
        if (nums[center] === target) {
            start = center;
            end = center;
            break;
        }
        else if (nums[center] < target) start = center + 1;
        else end = center - 1;
    }

    if (start > end) return [-1, -1];

    // find the edges
    while (nums[start - 1] === target) start--;
    while (nums[end + 1] === target) end++;
    return [start, end];
};

//Leet Code Problem 412 /////////////////////////////////////////////////////////////////////////
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
    const output = [];
    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) {
            output.push("FizzBuzz")
        } else if (i % 5 === 0) {
            output.push("Buzz")
        } else if (i % 3 === 0) {
            output.push("Fizz")
        } else {
            output.push(String(i));
        }
    }
    return output;
};