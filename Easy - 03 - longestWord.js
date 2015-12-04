// Using the JavaScript language, have the function LongestWord(sen) take the sen parameter being passed and return the 
// largest word in the string. If there are two or more words that are the same length, return the first word from the 
// string with that length. Ignore punctuation and assume sen will not be empty. 

var sentance = "I prefer pizzas.";

function LongestWord(sen) {
    var words;                              // Declare the variable at the top of its scope
    sen = sen.replace(/[^\w\s]+/g, "");     // Strip out non-word or non white-space characters
    words = sen.split(" ");                 // Break appart sentance along the spaces -> words array
    words = words.sort(function(a,b){       // Orders elements in the the words array in decending order (by length)
        return b.length - a.length;  
    });  
    return words[0];                        // Return the first (& therefore longest) word in the array
}

LongestWord(sentance);