//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let nums = [2,4,6,8,10]
nums = 2 + 4 + 6 + 8 + 10
alert(nums)
//OR
let numsTwo = [2,4,6,8,10]
let sum = numsTwo.reduce((accumulator,currentValue) =>accumulator+currentValue,0)
console.log(sum)
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function arrayOfNums(n1,n2,n3,n4,n5) {
    return (Math.sqrt(n1,n2,n3,n4,n5))
}
console.log(arrayOfNums(2,4,6,8,10))
//Create a function that takes string
//Print the reverse of that string to the console

//Create a function that takes in a string
//Alert if the string is a palindrome or not
