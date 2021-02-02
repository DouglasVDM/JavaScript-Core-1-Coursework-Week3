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

//function checks for string(name) longer than 7 letters and 1st starting letter A.
function longerThanSeven(name) {
  return name.length > 7 && name[0] === "A";
} 

//using .find() method.
let findLongNameThatStartsWithA = names.find(longerThanSeven); 

var longNameThatStartsWithA = findLongNameThatStartsWithA;

console.log(longNameThatStartsWithA);

/* EXPECTED OUTPUT */
// "Alexandra"
