// Write a JavaScript program to count frequency of character in string.

// Input: "hello"
// Output: { 'h': 1, 'e': 1, 'l': 2, 'o': 1 }

let input = "hello";
let frequency = {};

for (char of input) {
  if (char in frequency) {
    frequency[char]++;
  } else {
    frequency[char] = 1;
  }
}

console.log(frequency);
