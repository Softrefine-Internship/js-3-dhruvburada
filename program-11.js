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
  let flag;
  for (char of str1) {
    if (char !== " " && str2.includes(char.toLowerCase())) {
      flag = true;
    } else {
      flag = false;
    }
  }

  return flag;
}

console.log(isAnagram("evil", "vile"));
console.log(isAnagram("gentleman", "elegant man"));
console.log(isAnagram("evil", "vile"));
console.log(isAnagram("evil Utsav", "vile vastu"));
