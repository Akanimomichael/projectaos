// // Exercise 1: Filtering an Array
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // Exercise 2: Mapping Values
// const originalArray = [2, 4, 6, 8, 10];

// Exercise 3: Finding Maximum Value
const values = [15, 7, 23, 56, 42, 11];

// Exercise 4: Checking for Inclusion
const fruits = ["apple", "banana", "orange", "grape", "mango"];
const searchItem = "orange";

// Exercise 5: Concatenating Arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// Exercise 6: Slicing an Array
const animals = ["lion", "elephant", "zebra", "giraffe", "tiger"];

// Exercise 7: Reversing an Array
const colors = ["red", "green", "blue", "yellow", "orange"];

// // Exercise 8: Sorting an Array
// const randomNumbers = [5, 2, 9, 1, 7];

// // Exercise 9: Removing Duplicate Elements
// const duplicateArray = [1, 2, 3, 4, 2, 5, 6, 3, 7];

// Exercise 10: Finding the Index of an Element
const cars = ["Toyota", "Honda", "Ford", "BMW", "Audi"];

// Your code for the exercises goes here...

// Exercise 3: Finding Maximum Value
const myvalues = [15, 7, 23, 56, 42, 11];
let b = Math.max(...myvalues);
b;

// Exercise 7: Reversing an Array
const mycolors = ["red", "green", "blue", "yellow", "orange"];

let a = mycolors.reverse();
a;

// Exercise 4: Checking for Inclusion
const myfruits = ["apple", "banana", "orange", "grape", "mango"];
const mysearchItem = "orange";

let myanswer = myfruits.includes("orange");
myanswer;

// Exercise 5: Concatenating Arrays
const arrayOne = [1, 2, 3];
const arrayTwo = [4, 5, 6];

let ans = arrayOne.concat(arrayTwo);
ans;

// Exercise 6: Slicing an Array
const myanimals = ["lion", "elephant", "zebra", "giraffe", "tiger"];
let answer = myanimals.slice(2);
answer;

// Exercise 10: Finding the Index of an Element
const mycars = ["Toyota", "Honda", "Ford", "BMW", "Audi"];
console.log(mycars.indexOf("Honda"));
