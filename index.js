const myAnimals = ['cow', 'goat', 'cat'] 
const codeRigiPet= ['lion', 'dog']



// PUSH
// push(): Adds one or more elements to the end of an 
// array and returns the new length of the array.
const newanimals = myAnimals.push('rat')
console.log(newanimals)
console.log(myAnimals)
const yourAnimals = ['pig', 'sheep', ...myAnimals]
console.log(yourAnimals)
const emmaAnimals = [...myAnimals, ...yourAnimals, ...codeRigiPet]
const total = [myAnimals, yourAnimals, codeRigiPet]
console.log(total)
console.log(emmaAnimals)

// POP
// pop(): Removes the last element from an array and returns that element.

console.log(emmaAnimals.pop())
console.log(emmaAnimals)
console.log(emmaAnimals.pop())
console.log(emmaAnimals)


// SHIFT
// shift(): Removes the first element from an array and returns that element.

emmaAnimals.shift()

console.log(emmaAnimals)


// CONCAT
// concat(): Returns a new array comprised of the array on which it is called,
//  joined with other array(s) and/or value(s) provided as arguments.

const concat = codeRigiPet.concat(emmaAnimals, yourAnimals)

console.log(concat)





// SLICE
// slice(): Returns a shallow copy of a portion of an array into a new array object selected 
// from start to end (end not included).

const totalCon = concat.slice(2, 6)
console.log(totalCon)


// INDEXOF
// indexOf(): Returns the first index at which a given element can be found in
//  the array, or -1 if it is not present.

console.log(totalCon.indexOf("rat"));



// LASTINDEXOF
// lastIndexOf(): Returns the last index at which a given element can be 
// found in the array, or -1 if it is not present.

console.log(totalCon.lastIndexOf('goat'))


// INCLUDES
// includes(): Determines whether an array includes a certain element,
//  returning true or false as appropriate.
const letters = ['a', 'b', 'c', 'd', '']

console.log(letters.includes('z'))

const js1A = ['anna', 'edet', 'john']
const js1B = ["anna B", "edet B", "john B"];
const js1C= ["anna C", "edet C", "john C"];

// SOLUTION

const totalStudentJss1 = [...js1A, ...js1B, ...js1C]
console.log(totalStudentJss1)

js1A.push('ella')
console.log(js1A)
js1A.pop()
console.log(js1A)

const comfirm = js1B.includes("anna B");
console.log(comfirm)


if (comfirm) {
    console.log('welcome emma')
} else {
    console.log('you did not pass common entranced ')
}