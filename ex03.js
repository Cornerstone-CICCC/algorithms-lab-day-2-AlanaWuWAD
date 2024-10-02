// Exercise 3: Write a function `findMissingNumber` that takes an array of integers from 1 to `n`
// with one number missing and returns the missing number.
// Example: findMissingNumber([1, 2, 4, 5]) should return 3.

console.log(findMissingNumber([1, 2, 4, 5,10])); // Expected output: 3

function findMissingNumber(arr){
    let num = []
    let maxNum = arr.at(-1)
    let minNum = arr.at(0)
    for(let i=minNum; i<= maxNum; i++){
        if(!arr.includes(i)){
            num.push(i)
        }
    }
return num
}