// Write a JavaScript program to generate all combinations of a string.

// Input: Dog
// Output: [ 'd', 'do', 'dog', 'o', 'og', 'g' ]

let input = "Dog";
let combinations = [];
for (let i = 0; i < input.length; i++) {
  for (let j = i; j < input.length; j++) {
    combinations.push(input.slice(i, j + 1));
  }
}

console.log(combinations);
