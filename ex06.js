// Exercise 6: Write a function `getQueryParams` that takes a URL string and returns
// an object containing the query parameters as key-value pairs.
// Example: getQueryParams("https://example.com?search=test&page=2")
// should return { search: "test", page: "2" }.

console.log(getQueryParams("https://example.com?search=test&page=2")); // Expected output: { search: "test", page: "2" }

function getQueryParams(string){
    let obj = {}
    const newString = string.slice(string.indexOf('?')+1)
    let separate = newString.split('&')
    for(let i in separate){
        let temp = separate[i].split('=')
        obj[temp[0]]=temp[1]
    }
    return obj
}