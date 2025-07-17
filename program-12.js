// Write a JavaScript program to get the longest string in an array.

// Input:
// arr = [
// "JavaScript",
// "Python",
// "Java",
// "C++",
// "Ruby",
// "Swift",
// ]

// Output: "JavaScript"

arr = ["JavaScript", "Python", "Java", "C++", "Ruby", "Swift"];
let longest_word = arr.reduce((accumulator, currentValue) => {
  if (currentValue.length > accumulator.length) {
    return currentValue;
  }
  return accumulator;
}, "");

console.log(longest_word);
