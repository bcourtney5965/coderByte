// Using the JavaScript language, have the function TimeConvert(num) take the num parameter being passed and return the number of hours and 
// minutes the parameter converts to (ie. if num = 63 then the output should be 1:3). Separate the number of hours and minutes with a colon. 

var number = 87;  						// correct answer "1:27"
function TimeConvert(num) {
    var minutes = num % 60;  				// the modulus symbol (%) gives the remainder left after division
    var hours = (num - minutes)/ 60;
    return hours + ":" + minutes
}

TimeConvert(number);




// This is not technically what is being asked but provides a more recognizeable time format
function TimeConvert(num) {
    var minutes = num % 60;
    var hours = (num - minutes)/ 60;
    var stringMinutes = String(minutes);
    while (stringMinutes.length < 2) {
        stringMinutes = "0" + stringMinutes;
    }
    return hours + ":" + stringMinutes
}

TimeConvert(61);