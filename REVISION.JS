console.log('cdd')
// []
// {}

const myUtility = ['books', 'pen', 'laptop']
const akanimo = {
    age: 502,
    class: 'pri 2',
    friends: ['chiboy', 'emma', ]
} 
////////////////////////////



// console.log(teaher1, teaher2, teaher3)

const schoolTeahers = [
   {
  id: 232,
  teacherName: "edet udo",
  age: 502,
  class: "pri 2",
  friends: ["chiboy", "emma"],
}, 
{
  id: 22,
  teacherName: "Akpan udo",
  age: 502,
  class: "pri 2",
  friends: ["cboy", "ella"],
}, 
{
  id: 32,
  teacherName: "Okon udo",
  age: 502,
  class: "pri 2",
  friends: ["boychi", "emily"],
}
]

const newTeacher = {
  id: 32,
  teacherName: "ekpo udo",
  age: 502,
  class: "pri 2",
  friends: ["boychi", "emily"],
};
const afterEmploment = schoolTeahers.push(newTeacher)
console.log(schoolTeahers.pop());
console.log(schoolTeahers)


const arry1 = ['rat' , 'cat']
const arry2 = ['goat']

console.log(arry1.includes("rat"));

console.log(arry1.concat(schoolTeahers[2]))