// Using the JavaScript language, have the function ABCheck(str) take the str parameter being passed and return the string true if the characters a and b 
// are separated by exactly 3 places anywhere in the string at least once (ie. "lane borrowed" would result in true because there is exactly three 
//   characters between a and b). Otherwise return the string false. 

var string = "Laura sobs";       //"true"

function ABCheck(str) {
    str = str.toLowerCase();
    for (var i = 0; i < str.length; i += 1) {                                    // loops through the string
        if (str[i] === "a" && ((str[i + 4] === "b")||(str[i - 4] === "b"))) {    // if the current character is an "a" it checks if there is a "b" either 4 characters earlier or later
            return true;
        }
    }
    return false;
}

ABCheck(string);