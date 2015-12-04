// Using the JavaScript language, have the function ExOh(str) take the str parameter being passed and return the string true if there is an equal number 
// of x's and o's, otherwise return the string false. Only these two letters will be entered in the string, no punctuation or numbers. For example: if 
// str is "xooxxxxooxo" then the output should return false because there are 6 x's and 5 o's. 

var string = "xoOxxo"; // -> "true"

function exOh(str) {
  var exes = 0, ohs = 0;
  var target = /[xX]/;           					// declare variable to hold a regex expression which matches both upper & lower case "x"
  for (var i = 0; i < str.length; i += 1) { 		// loop through the characters in the string
    target.test(str[i]) ? exes += 1 : ohs += 1 ; 	// use a ternary operator and the previous regex test to determine whether to increment the "exes" or "ohs" variable
  }
  return exes === ohs;  							// will return true only if both variables are equal
}

exOh(string);