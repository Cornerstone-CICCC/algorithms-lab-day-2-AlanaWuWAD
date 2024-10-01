// Exercise 8: Write a function `groupByAge` that takes an array of people objects (each with a `name` and `age`),
// and groups them by age into an object where the keys are ages and the values are arrays of people of that age.
// Example: groupByAge([{ name: "Alice", age: 25 }, { name: "Bob", age: 25 }, { name: "Charlie", age: 30 }])
// should return { 25: [{ name: "Alice", age: 25 }, { name: "Bob", age: 25 }], 30: [{ name: "Charlie", age: 30 }] }.

console.log(groupByAge([{ name: "Alice", age: 25 }, { name: "Bob", age: 25 }, { name: "Charlie", age: 30 }])); // Expected output: { 25: [{ name: "Alice", age: 25 }, { name: "Bob", age: 25 }], 30: [{ name: "Charlie", age: 30 }] }

function groupByAge(students){
    let newObj = {}
    students.forEach(student => {
        if(newObj[student.age]){
            newObj[student.age].push(student)
        }else{
            newObj[student.age] = [student]
        }
        
    });
    return newObj

    // for(let i in array){
    //     console.log(array[i])
    //     console.log(newObj.age)
    //     if(newObj.age.includes(array[i].age)){
    //         newObj = array[i]
    //     }else {
    //         newObj = array[i].age
    //     }
    //     // console.log(newObj)
    //     // console.log(array[i].age)
    // }
}