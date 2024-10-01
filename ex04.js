// Exercise 4: Write a function `mostFrequentChar` that takes a string and returns the character
// that appears the most times. If there is a tie, return the first character that reaches the maximum frequency.
// Example: mostFrequentChar("javascript") should return "a".

console.log(mostFrequentChar("javascript")); // Expected output: "a"

function mostFrequentChar(text){
    let count={}
    for(let i in text){
        if (text[i] in count){
            count[text[i]]++
        }else {
            count[text[i]] = 1
        }
    }
    let numArray = Object.values(count)
    let letterArray = Object.keys(count)
    let max = 0
    let letter =''
    for(let i in numArray){
        if(numArray[i]>max){
            max = numArray[i]
            letter = letterArray[i]
        }
    }
    return `${letter} : ${max}`

}