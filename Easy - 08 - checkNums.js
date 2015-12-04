// Determines whether the second number is larger than the first number

function checkNums(num1, num2) {
    if (num1 === num2) {
        return "-1";  
    } else if (num2 < num1) {
        return "false";
    } else {
        return "true";
    }
}

checkNums(10, 12); // -> true