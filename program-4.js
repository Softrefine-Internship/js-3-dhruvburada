// Write a JavaScript program to get the index of an object by it's property.

// Input:
// arrayObj = [{
//     prop_1: 'val_1',
//     prop_2: 'val_2',
//     prop_3: 'val_3'
// }, {
//     prop_1: 'val_4',
//     prop_2: 'val_5',
//     prop_3: 'val_6'
// }];

// Output: 1 (index of an object for prop_1: 'val_4')

arrayObj = [
  {
    prop_1: "val_1",
    prop_2: "val_2",
    prop_3: "val_3",
  },
  {
    prop_4: "val_4",
    prop_5: "val_5",
    prop_6: "val_6",
  },
];

let prop = "prop_5";

function getIndex(prop) {
  for (let index in arrayObj) {
    if (arrayObj[index][prop] !== undefined) {
      return index;
    }
  }
}

let result = getIndex(prop);
if (result) {
  console.log(result);
} else {
  console.log("Property not found");
}
