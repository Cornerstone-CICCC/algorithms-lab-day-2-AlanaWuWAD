// Exercise 3: Write a function `findMissingNumber` that takes an array of integers from 1 to `n`
// with one number missing and returns the missing number.
// Example: findMissingNumber([1, 2, 4, 5]) should return 3.

console.log(findMissingNumber([1, 2, 4, 5])); // Expected output: 3

function findMissingNumber(arr){
    let num = []
    let initialNum = arr[0]

    // for(let i=1; i< arr.length; i++){
    //     if(arr[i]-arr[i-1] !== 1){
    //         let temp = arr[i-1]
    //         for(i=0;i<arr[i]-arr[i-1]; i++){
    //             temp ++
    //             num.push(temp)
    //         }
    //     }
    // }
    // console.log(num)

    for(let i=1; i< arr.length; i++){
        initialNum ++
        if(arr[i] !== initialNum){
            num.push(initialNum)
            initialNum = arr[i]
        }
    }
return num
}