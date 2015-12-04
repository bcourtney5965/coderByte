// Using the JavaScript language, have the function FirstFactorial(num) take the num parameter being passed and return the factorial 
// of it (ie. if num = 4, return (4 * 3 * 2 * 1)). For the test cases, the range will be between 1 and 18. 

var number = 4; // Answer: 24

function firstFactorial(num) { 
	var output = 1;
	for (var i = 1; i <= num; i++) {
		// this is the same as  output = output * i;
		output *= i;
	}
	return output;
}

firstFactorial(number);




// A recursive Approach

var number = 4; // Answer: 24

// Recursion is a function calling itself, which "is perfectly ok 
// so long as it takes care not to overflow the stack" - Eloquent
// JavaScript by Marijn Haverbeke
// this is a recursive approach to solving a factorial problem
function firstFactorial(num) { 
// for cases where 1 is passed, although more often the final 
// step in the recursive solution.  Prevents infinite loops
	if (num === 1) {
    	return 1;
  	} else {
// the function calls itself with succeedingly smaller arguments,
// multiplying each iteration.
    return num * firstFactorial(num - 1);
  	}
}

firstFactorial(number);