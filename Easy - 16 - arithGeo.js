// Using the JavaScript language, have the function ArithGeo(arr) take the array of numbers stored in arr and return the string "Arithmetic" if the 
// sequence follows an arithmetic pattern or return "Geometric" if it follows a geometric pattern. If the sequence doesn't follow either pattern return -1. 
// An arithmetic sequence is one where the difference between each of the numbers is consistent, where as in a geometric sequence, each term after the first 
// is multiplied by some constant or common ratio. Arithmetic example: [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54]. Negative numbers may be entered 
// as parameters, 0 will not be entered, and no array will contain all the same elements. 

var array = [2, 6, 18, 54]; // -> "Geometric"

function arithGeo(arr) {
  var difference1 = arr[3] - arr[2];                                      // these first three lines are determining the differnce between each element
  var difference2 = arr[2] - arr[1];
  var difference3 = arr[1] - arr[0];
  var multiplier1 = arr[3] / arr[2];                                      // these next three lines are determining the quotients between each element
  var multiplier2 = arr[2] / arr[1];
  var multiplier3 = arr[1] / arr[0];
  if ((difference1 === difference2) && (difference2 === difference3)) {   // determining if the differences are equal (the definition of an arithmetic sequence)
    return "Arithmetic";
  } else if ((multiplier1 === multiplier2) && (multiplier2 === multiplier3)) { // determining if the quotients are equal (the definition of a geometric sequence)
    return "Geometric";
  } else {
    return -1;
  }

}

arithGeo(array);