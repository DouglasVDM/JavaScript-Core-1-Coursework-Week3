/* 
  You are given an statement

  You should remove the word "and dogs" by using substring 
*/

let statement = "I like programming and dogs";

newStatement = statement.substring(0, statement.lastIndexOf("and"));


console.log(newStatement);

/* EXPECTED OUTPUT 

  "I like programming"
  
*/
