//Create a function that takes in an array of numbers. 
//Return a new array containing every even number from the original array (do not use map or filter)


function arrayOfNumbers(array) {
  arr = [];
  array.forEach(function (num) {
    if (!(num % 2)) {
      arr.push(num);
    }
  });
  return arr
}
arrayOfNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

function returnEvenNumbersFromArray(array) {
  finishedArray = [];
  array.forEach(function (num) {
    if (!(num % 2)) {
      finishedArray.push(num);
    }
  });
  return finishedArray;
}