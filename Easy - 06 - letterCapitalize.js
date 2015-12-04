// Using the JavaScript language, have the function LetterCapitalize(str) take the str parameter being passed and capitalize the 
// first letter of each word. Words will be separated by only one space. 

var sentance = "argument goes here brandon";

function LetterCapitalize(str) { 
    var strArray = str.split(" "); 							// now array of words
    var lettersArray = [];
    for (var i = 0; i < strArray.length; i += 1) { 			// loops through the words in the array
        lettersArray = strArray[i].split("");  				// splits words into its letters
        lettersArray[0] = lettersArray[0].toUpperCase();  	// capitalizes the first letter of the word
        strArray[i] = lettersArray.join(""); 				// reforms the letters into Capitalized words in an array
    }
    return strArray.join(" ");
}

LetterCapitalize(sentance);