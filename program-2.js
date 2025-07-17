// Write a JavaScript program to convert two-dimensional array in to an object.

// Input:  [
//     ["John", 12],
//     ["Jack", 13],
//     ["Matt", 14],
//     ["Maxx", 15]
// ]

// Output: {
//     "John": 12,
//     "Jack": 13,
//     "Matt": 14,
//     "Maxx": 15
// }

let obj = {};

let input = [
  ["John", 12],
  ["Jack", 13],
  ["Matt", 14],
  ["Maxx", 15],
];

for (let arr of input) {
  obj[arr[0]] = arr[1];
}

console.log(obj);
