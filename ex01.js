// Exercise 1: Write a function `capitalizeWords` that takes a string and returns the string
// with the first letter of each word capitalized.
// Example: capitalizeWords("hello world") should return "Hello World".

console.log(capitalizeWords("hello world")); // Expected output: "Hello World"

function capitalizeWords(text){
    let temp = []
    text = text.split(' ')
    text.forEach(element => {
        temp += element.charAt(0).toUpperCase() + element.slice(1)
        temp += ' '
    });
   return temp

}