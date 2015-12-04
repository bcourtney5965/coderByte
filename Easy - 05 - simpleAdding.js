// Using the JavaScript language, have the function SimpleAdding(num) add up all the numbers from 1 to num. For the test cases, the 
// parameter num will be any number from 1 to 1000. 

var number = 3; 							//answer 6

function SimpleAdding(num) { 
    var sum = 0, i; 						// initialize variables
    for (i = 0; i <= num; i += 1) {			// loop through num times
        sum += i;
    }
    return sum;
}

SimpleAdding(number);