// Write a JavaScript program to check subset.

// Example 1:
// Input:
// let set1 = new Set([1, 2, 3, 4, 5]);
// let set2 = new Set([3, 4]);

// Output: false

// Example 2:
// Input:
// let set1 = new Set([3, 4]);
// let set2 = new Set([1, 2, 3, 4, 5]);

// Output: true

function isSubset(set1, set2) {
  let arr1 = Array.from(set1);
  for (let item of set1) {
    if (!set2.has(item)) {
      return false;
    }
  }

  return true;
}

let set1 = new Set([1, 2, 3, 4, 5]);
let set2 = new Set([3, 4]);

let set3 = new Set([3, 4]);
let set4 = new Set([1, 2, 3, 4, 5]);

console.log(isSubset(set1, set2));
console.log(isSubset(set3, set4));
