/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here

var names = [
  "Rakesh",
  "Antonio",
  "Alexandra",
  "Andronicus",
  "Annam",
  "Mikey",
  "Anastasia",
  "Karim",
  "Ahmed",
];

//function checks for string(name) longer than 7 letters.
function longerThanSeven(name) {
  return name.length > 7;
} 

//using .find() method.
let findLongNameThatStartsWithA = names.find(longerThanSeven); 

//still need to find a way to check for string that starts with A

var longNameThatStartsWithA = findLongNameThatStartsWithA;

console.log(longNameThatStartsWithA);

/* EXPECTED OUTPUT */
// "Alexandra"
