// Write a JavaScript program to count number of occurrences of repeated names in an array of objects.

// Input:
// arr = [
//     {
//        employeeName: "Ram",
//        employeeId: 23
//     },
//     {
//        employeeName: "Shyam",
//        employeeId: 24
//     },
//     {
//        employeeName: "Ram",
//        employeeId: 21
//     },
//     {
//        employeeName: "Ram",
//        employeeId: 25
//     },
//     {
//        employeeName: "Kisan",
//        employeeId: 22
//     },
//     {
//        employeeName: "Shyam",
//        employeeId: 20
//     }
//  ]

// Output:
// [
//     {employeeName: "Ram", occurrences: 3},
//     {employeeName: "Shyam", occurrences: 2},
//     {employeeName: "Kisan", occurrences:  1}
// ]

arr = [
  {
    employeeName: "Ram",
    employeeId: 23,
  },
  {
    employeeName: "Shyam",
    employeeId: 24,
  },
  {
    employeeName: "Ram",
    employeeId: 21,
  },
  {
    employeeName: "Ram",
    employeeId: 25,
  },
  {
    employeeName: "Kisan",
    employeeId: 22,
  },
  {
    employeeName: "Shyam",
    employeeId: 20,
  },
];

let occurrences = [];
let isVisited = [];

for (let index in arr) {
  let count = 0;
  let obj = arr[index];
  let name = obj.employeeName;

  for (let i = index; i < arr.length; i++) {
    if (name == arr[i].employeeName) {
      count++;
    }
  }

  if (!isVisited.includes(name)) {
    occurrences.push({ employeeName: name, occurrences: count });
    isVisited.push(name);
  }
}

console.log(occurrences);
