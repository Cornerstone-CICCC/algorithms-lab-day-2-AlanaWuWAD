// Exercise 9: Write a function `sortByProperty` that takes an array of objects
// and a property name, and returns the array sorted by that property in ascending order.
// Example: sortByProperty([{name: "Alice", age: 30}, {name: "Bob", age: 25}], "age")
// should return [{name: "Bob", age: 25}, {name: "Alice", age: 30}].

console.log(sortByProperty([{name: "Lala", age: 30}, {name: "Bob", age: 25},{name: "Ant", age: 29}], "age")); // Expected output: [{name: "Bob", age: 25}, {name: "Alice", age: 30}]

function sortByProperty(students, key){
    return students.sort((a,b)=>a[key]-b[key])
}