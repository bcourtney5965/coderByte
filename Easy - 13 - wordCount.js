// Using the JavaScript language, have the function WordCount(str) take the str string parameter being passed and return the number of words the string 
// contains (ie. "Never eat shredded wheat" would return 4). Words will be separated by single spaces. 

var string = "   Hello there world    "; // should return -> 3

function wordCount(str) {
	var spaces = 0;
	str = str.trim();  						// gets rid or excess spaces on the ends of a string
	for (var i = 0; i < str.length; i += 1) { // loops through the string
	    if (str[i] === " ") {  					// spaces, which after line line 8 should only be between words
	        spaces += 1;
	    }
	}
	return spaces + 1;   						// returns one more than spaces in the event that there aren't any like with one word
}

wordCount(string);





// one line version
var string = "Never eat shredded wheat"; // should return -> 4

function wordCount(str) {
	return str.split(" ").length;        //splits "str" into an array and returns the array's length
}

wordCount(string);