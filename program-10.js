// Write a JavaScript program to find the longest word within the string.

// Input: "This is a demo String find the largest word from it"
// Output: "largest"

let string = "This is a demo String find the largest word from it";
let words = string.split(" ");

let maxLen = 0;
let longest_word = "";
words.forEach((word) => {
  if (word.length > maxLen) {
    longest_word = word;
    maxLen = word.length;
  }
});

console.log(longest_word);
