/* 
Password Validation

Write a program that should check if each password in an array 
contains a valid password (see below for password criteria) and return a
new array with true or false booleans for whether that password was valid or not.

To be valid, a password must:
- Have at least 5 characters.
- Have at least one English uppercase letter (A-Z)
- Have at least one English lowercase letter (a-z)
- Have at least one number (0-9)
- Have at least one non-alphanumeric symbol ("!", "#", "$", "%", ".", "*", "&")

Passwords must not be any previous password in the passwords array. 

Example 1:
PreviousPassword = ["fhD8!yrjj", "ttkTu.wer3", "dvyyeyY!5", "qwbfj76%", "tytT3729."];

Expected Result:
PasswordValidationResult=  [false, false, false, false, true]

*/

function validatePasswords(passwords) {
  let specialSymbols = /[!#$%.*&]/;
  let uppercaseLetter = /[A-Z]/;
  let lowerCaseLetter = /[a-z]/;
  let numbers = /[0-9]/;
  
  return passwords.map(fun    ction (element, index, array) {
      return (element.length  > 4           //- Have at least 5 characters.
        && uppercaseLetter.test(element)    //- Have at least one English uppercase letter (A-Z)
        && lowerCaseLetter.test(element)    //- Have at least one English lowercase letter (a-z)
        && numbers.test(element)            //- Have at least one number (0-9)
        && specialSymbols.test(element)     //- Have at least one non-alphanumeic symbol
        && array.indexOf(element) === index //- Check the array for the index of the element and must be equal to the actual index. =true
      );
    });
}

// indexOf(element)
/*
  The test() method tests for a match in a string.
  This method returns true if it finds a match, otherwise it returns false.
*/

/* ======= TESTS - DO NOT MODIFY ===== */

const passwords1 = ["Se%5", "TktE.TJTU", "384#HsHF", "dvyyeyy!5", "tryT3729"]
const passwords2 = ["StUFf27%", "Pl3nty!", "Jai33", "shajsaUA**&&", "Pl3nty!"]

const util = require('util');

function test(test_name, actual, expected) {
    let status;
    if (util.isDeepStrictEqual(actual, expected)) {
        status = "PASSED";
    } else {
        status = `FAILED: expected: ${util.inspect(expected)} but your function returned: ${util.inspect(actual)}`;
    }

    console.log(`${test_name}: ${status}`);
}

test(
  "validatePasswords function works - case 1",
  validatePasswords(passwords1),
  [false, false, true, false, false]
 );

test(
  "validatePasswords function works - case 2",
  validatePasswords(passwords2),
  [true, true, false, false, false]
);

// return passwords.map((password, index) => {
//     return (
//       passwords.indexOf(password) === index &&
//       password.length >= 5 &&
//       /[A-Z]/.test(password) &&
//       /[a-z]/.test(password) &&
//       /[0-9]/.test(password) &&
//       /[!#$%.*&]/.test(password)
//     );
//   });
// }	