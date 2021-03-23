// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

//function is only needed for a map operation, the function is inside .map method.
mutiplyBy100A = numbers.map(function mutiplyBy100(number) {
    return number * 100;
});
console.log(`This is named function for method A: ${mutiplyBy100A}`);

//I don't need a name to reference the function because it is only needed for this map operation. Nowhere else.
mutiplyBy100B = numbers.map(function (number) {
    return number * 100;
});
console.log(`This is anonymous function for method B: ${mutiplyBy100B}`);

// Arrow Function with curly braces and the return keyword.
mutiplyBy100C = numbers.map(number => {
    return number * 100;
});
console.log(`This is arrow function 1 for method C: ${mutiplyBy100A}`);

// Arrow Function removed curly braces and do not need to write the return keyword.
mutiplyBy100D = numbers.map(number => number * 100);
console.log(`This is arrow function 2 for method D: ${mutiplyBy100D}`);
