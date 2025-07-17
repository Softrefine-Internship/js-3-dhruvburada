// Write a JavaScript program to modify an object’s property in an array of objects.

// Input:
// arr = [
// {
//     employee_id: 1,
//     employee_name: "Aman",
// },
// {
//     employee_id: 2,
//     employee_name: "Bhargava",
// },
// {
//     employee_id: 3,
//     employee_name: "Chaitanya",
// },
//  ]

// Output:
// [
//     { employee_id: 1, employee_name: 'Aman' },
//     { employee_id: 2, employee_name: 'Rahul' },
//     { employee_id: 3, employee_name: 'Chaitanya' }
// ]

arr = [
  {
    employee_id: 1,
    employee_name: "Aman",
  },
  {
    employee_id: 2,
    employee_name: "Bhargava",
  },
  {
    employee_id: 3,
    employee_name: "Chaitanya",
  },
];

function updateName(arr, emp_id, newname) {
  arr.forEach((element, index) => {
    if (element.employee_id == emp_id) {
      element.employee_name = newname;
    }
  });

  return arr;
}

console.log(updateName(arr, 1, "Dhruv"));
