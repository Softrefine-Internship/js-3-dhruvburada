// Write a JavaScript program to check a given string is an anagram of another string.

// Example 1:
// Input: evil = vile
// Output: true

// Example 2:
// Input: a gentleman = elegant man
// Output: true

// Example 3:
// Input: eleven plus two = twelve plus one
// Output: true

function isAnagram(str1, str2) {
  for (char of str1) {
    if (char !== " " && !str2.includes(char)) {
      return false;
    }
  }

  return true;
}

console.log(isAnagram("evil", "vile"));
console.log(isAnagram("gentleman", "elegant man"));
console.log(isAnagram("evil", "vile"));
