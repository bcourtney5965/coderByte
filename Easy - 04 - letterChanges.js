// Using the JavaScript language, have the function LetterChanges(str) take the str parameter being passed and modify it using the 
// following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes 
//  a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string. 

var string = "gdkkn&2";  // Output = "hEllO&2"

function letterUpshift(letter) {
  	var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
  	var index = alphabet.indexOf(letter);
	
  	if (alphabet.indexOf(letter) === -1) {						// if the letter isn't in the alphabet array AKA the character isn't a letter
  	  	return letter;							
  	} else if (index === 25) {									// if the letter is "z", return "a"
  	  	return alphabet[0];
  	} else {
  	  	return alphabet[index += 1];							// else return the next letter in the alphabet array
  	}
}

function vowelCapitalizer(letter) {
  	var myLetter = "";
  	var vowels = ["a", "e", "i", "o", "u"];
  	return (vowels.indexOf(letter) !== -1) ? letter.toUpperCase() : letter;		// this is a "ternary operator" - google the term if not familiar with it
}

function letterChanges(str) { 
    var strArray = [];
    var i;
    var newString = "";
    var upshiftedStrArray = [];
    str = str.toLowerCase(); // lower case
    strArray = str.split(""); // changed to array

    for (i = 0; i < strArray.length; i += 1) {
        upshiftedStrArray.push(letterUpshift(strArray[i])); 	// shifted letters and put it in  upshiftedStrArray
    }

    for (i = 0; i < upshiftedStrArray.length; i += 1) {
        newString += vowelCapitalizer(upshiftedStrArray[i]);	//vowels capitalized and added the the string newString
    }

    return newString;
}

letterChanges(string);