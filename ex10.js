// Exercise 10: Write a function `convertToCamelCase` that takes a string
// with words separated by spaces or underscores, and returns the string in camelCase format.
// Example: convertToCamelCase("hello_world") should return "helloWorld".

console.log(convertToCamelCase("hello_world KKKK")); // Expected output: "helloWorld"

function convertToCamelCase(string){
    let newArr = string.split('_')
    let newString = newArr.map(item => item.split(' ')).flat()
    let temp = newString[0]
    for(let i=1; i<newString.length; i++){
        temp += newString[i].charAt(0).toUpperCase() + newString[i].slice(1).toLowerCase()
    }
    return temp
}