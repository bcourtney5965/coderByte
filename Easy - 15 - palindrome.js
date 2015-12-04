// Using the JavaScript language, have the function Palindrome(str) take the str parameter being passed and return the string true if the 
// parameter is a palindrome, (the string is the same forward as it is backward) otherwise return the string false. For example: "racecar" 
// is also "racecar" backwards. Punctuation and numbers will not be part of the string. 

var string = "rAceCar";                             // answer: true

function palindrome(str) {
    var reverseStr;
    str = str.replace(/[^a-z]/gi, "").split("");    // use the replace method to strip out non letters, then split up into an array of individual characters
    for (var i = 0; i < str.length; i++) {          // loop through the array
        if (str[i] === str[i].toUpperCase()) {      // if a letter is uppercase
            str[i] = str[i].toLowerCase();          // make it lower case
        }
    }   
    str = str.join("");                             // reform a string
    reverseStr = str.split("").reverse().join("");  // set reverseStr equal to the reverse form of str
    return reverseStr === str;                      // only returns true if both variables are equal
}

palindrome(string);