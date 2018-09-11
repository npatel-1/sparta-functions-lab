// 1. Write a function called 'multiply' that multiplies two numbers and returns the result
function multiply (num1,num2) {
  return num1*num2;
}
// 2. Write a function called 'addThree' that adds three numbers together and returns the result
function addThree (num1,num2,num3) {
  var result = num1 + num2 + num3;
  return result;
}
// 3. Write a function called 'smallestNumber' that returns the smaller of 2 numbers
function smallestNumber (num1,num2) {
  if (num1<num2) {
    return num1;
  } else
    return num2;
}
// 4. Write a function called 'maxOfThree' that returns the largest of 3 numbers
function maxOfThree (num1,num2,num3) {
  if (num3 > num1 && num3 > num2) {
    return num3;
  } else if (num2 > num1) {
    return num2;
  } else {
    return num1;
  }

}
// 5. Write a function called 'reverseString' that returns the reverse a string
function reverseString(string){
    var newString = "";
    for (var i = string.length - 1; i >= 0; i--) {
        newString += string[i];
    }
    return newString;
}
reverseString('hello');

// 6. Write a function called 'disemvowel' that returns a string with the vowels stripped out
function disemvowel(string){
  return string.replace(/[aeiou]/gi, '');
}

// 7. Write a function called 'removeOdd' that removes all ODD number from an array
function removeOdd(array){
  var arr2 = [];
  for(var i = 0; i < array.length; i++){
    if (array[i] %2 === 0) {
      arr2.push(array[i]);
    }
  }
  return arr2;
}
// 8. Write a function called 'removeEven' that removes all EVEN number from an array
function removeEven(array){
  for(var i = 0; i < array.length; i++){
    if (array[i] %2 === 0) {
      array.splice(i, + 1);
    }
  }
  return array;
}
// 9. Write a function called 'longestString' that takes an array of strings and returns the string with the longest character length
function longestString(array) {
  var long = '';
  for (var i = 0; i < array.length; i++) {
    if (array[i].length > long.length) {
      long = array [i];
    }
  }
  return long;
}
// 10. Write a function called 'allElementsExceptFirstThree' that discards the first 3 elements of an array,
// e.g. [1, 2, 3, 4, 5, 6] becomes [4, 5, 6]
function allElementsExceptFirstThree(arr){
  for (var i = 0; i < 3; i++) {
    arr.shift();
}
return arr;
}
//#### BONUS ####

// 11. Write a function called 'convertArrayToAnObject' that turns an array (with an even number of elements) into a hash, by
// pairing up elements. e.g. ['a', 'b', 'c', 'd'] becomes
// {'a' => 'b', 'c' => 'd'}
function convertArrayToAnObject(array){
  console.log(array);

}
// 12. Write a function called 'fizzBuzz' that takes any number and returns a value based on these rules

// But for multiples of three print "Fizz" instead of the number
// For the multiples of five print "Buzz".
// For numbers which are multiples of both three and five print "FizzBuzz".
