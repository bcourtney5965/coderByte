// Using the JavaScript language, have the function AlphabetSoup(str) take the str string parameter being passed and return the string with the letters 
// in alphabetical order (ie. hello becomes ehllo). Assume numbers and punctuation symbols will not be included in the string. 

var string = "coderbyte";  //"bcdeeorty"

function alphabetSoup(str) {
    return str.split("").sort().join("");  	// this is an example of "chaining" (google it) here split returns the letters in an array,
}											// then they are SORTed alphabetically, lastly they are reJOINed into a string	

alphabetSoup(string);