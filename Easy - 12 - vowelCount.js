// Using the JavaScript language, have the function VowelCount(str) take the str string parameter being passed and return the number of vowels 
// the string contains (ie. "All cows eat grass" would return 5). Do not count y as a vowel for this challenge. 
var string = "All cows eat grass";  // answer = 5

function vowelCount(str) {
    var vowels = /[aeiou]/i;
    var counter = 0;
    for (var i = 0; i < str.length; i += 1) {
        if (vowels.test(str[i])) {counter++}  // this is making use of the test method with regex.
    }
    return counter;
}

vowelCount(string);