
let arr = [[1], [2], [3]];
let newArr = arr.map(array => array[0]);
console.log(newArr);    //should print [ 1, 2, 3 ]

/* Shorter Version.
let arr = [[1], [2], [3]];
console.log(arr.map(arr => arr[0]));    //should print [ 1, 2, 3 ]
*/