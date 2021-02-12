//Arrays
//Create and array of tv shows. Loop through and print each show to the console
let tvShows = ['breakingBad', 'starWars', 'lordOfTheRings']
tvShows.forEach(shows => console.log(shows))
//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays
let nums = [1,2,3,4,5,6,7,8,9,10]
function evens(arr) {
    return arr.filter(num => num % 2 === 0)
}
console.log(evens(nums))
//OR
let numsTwo = [1,2,3,4,5,6,7,8,9,10]
let onlyEven = array => array.filter(num => num % 2 === 0)
console.log(onlyEven(numsTwo))
//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
