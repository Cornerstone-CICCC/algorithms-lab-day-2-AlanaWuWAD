// Exercise 5: Write a function `countConsonants` that takes a string
// and returns the number of consonants in the string.
// Example: countConsonants("hello world") should return 7.

console.log(countConsonants("hello world")); // Expected output: 7

function countConsonants(string){
    let vowels = ['a','e','i','o','u']
    let num = 0
    for(let i in string){
        if(!vowels.includes(string[i]) && string[i]!=' '){
            num ++
        }
    }
    return num
}