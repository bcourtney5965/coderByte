var string = "f++d+";               //Output = "false"

function SimpleSymbols(str) {
    var alphabet = /[a-zA-Z]/;
    var isTrue = true;
    if (str.length < 3) { return false}
  
    for (var i = 0; i < str.length; i += 1) {
        if ( alphabet.test(str[i])) {
            if ((str[i - 1] !== "+") || (str[i + 1] !== "+")) {
                return false;
            } else {
                isTrue = true;
            }
        }
    }
    return isTrue;
}

SimpleSymbols(string);