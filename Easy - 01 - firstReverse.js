// Using the JavaScript language, have the function FirstReverse(str) take the str parameter being passed and return the string in 
// reversed order. 

var string = "!dekrow noitcnuf esreveRtsrif eht ,siht gnidaer er'uoy fI";

function firstReverse(str) {
    // this is an example of "chaining" (google it)
    // .split("") - method which splits our string into individual characters which it returns as an array
    // .reverse() - method which reverses the order of elements in an array; 
    // .join("") - re-joins the elements of an array back into an array (without spaces between elements)
    // it is important to note that in instances of chaining such as this, the methods execute left to right
    return str.split("").reverse().join("");
}

firstReverse(string);