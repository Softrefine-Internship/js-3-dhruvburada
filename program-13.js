// Write a JavaScript program to group elements by their properties.

// Input:
// arr = [
//     { id: 1, name: "John" },
//     { id: 2, name: "Alice" },
//     { id: 3, name: "Bob" },
//     { id: 4, name: "Alice" },
// ]

// Output:
// { 'John' => [ 1 ], 'Alice' => [ 2, 4 ], 'Bob' => [ 3 ] }

arr = [
  { id: 1, name: "John" },
  { id: 2, name: "Alice" },
  { id: 3, name: "Bob" },
  { id: 4, name: "Alice" },
];

let result = [];
let map = new Map();
let visited = [];

for (obj of arr) {
  let newArr = [];
  if (!map.has(obj.name)) {
    newArr.push(obj.id);
    map.set(obj.name, newArr);
  } else {
    map.get(obj["name"]).push(obj.id);
  }
}

console.log(map);
