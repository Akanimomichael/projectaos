

// map(): Calls a provided callback function once for each element in an array, and returns a new array of the results.
    const schoolStudent = ['rose', 'john', 'Lizzy']



// forEach(): Calls a provided callback function once for each element in an array, in order.


// DIFF B/W map() and foreach()
// map():
// The map() method creates a new array by applying a provided function to each element of the original array.
// It returns a new array with the results of calling the provided function on every element in the original array.
// It doesn't modify the original array; instead, it returns a new array with the transformed elements.
// map() is useful when you want to transform each element of an array and collect the results into a new array.
// Example:


// const schoolStudent = ['rose', 'john', 'Lizzy']
const SchoolFeesStatus = schoolStudent.map(student=> student+ ' ' + 'PAID');
console.log(SchoolFeesStatus);
// forEach():
// The forEach() method executes a provided function once for each array element.
// It doesn't create a new array; instead, it iterates over each element of the array and performs an action defined by the provided function.
// forEach() is used when you want to perform an action on each element of the array without creating a new array.
// Example:


const student = schoolStudent.forEach(student=> 
    console.log(student)
    ); 

    // console.log(schoolStudent)

// In summary, map() is used for transforming each element of an array 
// into a new value and collecting the results into a new array, while forEach() 
// is used for executing a function on each element of an array without creating a
//  new array.

// Example array
const numbers = [10, 20, 30, 40, 50];

// filter(): Creates a new array with all elements that pass the test implemented by the provided callback function.
const filteredNumbers = numbers.filter(num => num > 25);
console.log(filteredNumbers); // Output: [30, 40, 50]

// reduce(): Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 150

// some(): Checks if at least one element in the array passes the test implemented by the provided callback function.
const hasEvenNumber = numbers.some(num => num % 2 === 0);
console.log(hasEvenNumber); 

// every(): Checks if all elements in the array pass the test implemented by the provided callback function.
const allEvenNumbers = numbers.every(num => num % 2 === 0);
console.log(allEvenNumbers); 

// find(): Returns the value of the first element in the array that satisfies the provided testing function.
const foundNumber = numbers.find(num => num > 25);
console.log(foundNumber); 

// findIndex(): Returns the index of the first element in the array that satisfies the provided testing function.
const foundIndex = numbers.findIndex(num => num > 25);
console.log(foundIndex); 

// sort(): Sorts the elements of an array in place and returns the sorted array.
const sortedNumbers = numbers.sort((a, b) => a - b);
console.log(sortedNumbers);
