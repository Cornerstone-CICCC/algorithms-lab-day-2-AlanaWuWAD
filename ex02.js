// Exercise 2: Write a function `arrayDifference` that takes two arrays and returns an array
// containing the elements that are in the first array but not in the second array.
// Example: arrayDifference([1, 2, 3], [2, 3, 4]) should return [1].

console.log(arrayDifference([1, 2, 3], [2, 3, 4])); // Expected output: [1]

function arrayDifference(arrayA, arrayB){
    let num =[]
    for(let i=0; i< arrayA.length; i++){
        if(!arrayB.includes(arrayA[i])){
            num.push(arrayA[i]) 
        }
    }
    console.log(num)
}