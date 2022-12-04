// Importing the readline-sync package for taking the input from the user
let readline = require("readline-sync");
let input = readline.question("Enter your data: ");

// Match method to return all the integers
let strArray = input.match(/\d+/g);

// mapping each value from the array changing its form to a number from string and adding them until we get the sum
let sum = 0;
strArray.forEach((i) => {
  sum += parseInt(i);
});


console.log(`The sum of all the numbers in the string is ${sum}`);
