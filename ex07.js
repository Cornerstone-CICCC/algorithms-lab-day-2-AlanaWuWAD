// Exercise 7: Write a function `validateEmail` that takes a string as an email
// and returns true if the email is valid, and false otherwise. Use basic validation
// (e.g., the presence of "@" and a ".").
// Example: validateEmail("test@example.com") should return true.

console.log(validateEmail("test@example.com")); // Expected output: true
console.log(validateEmail("invalid-email.com")); // Expected output: false

function validateEmail(string){
    if(string.includes('@')){
        if(string.includes('.')){
            if(string.indexOf('.')>string.indexOf('@')+1){
                return true
            }else{
                return false
            }
        }else {
            return false
        }
    }else {
        return false
    }

}