//Create an array of movies with at least three movies.
let threeMovieArr = ['ToyStory', 'Jump', 'MrBean', '007'] //0, 1, 2
//Using the array from above, store the first movie in a variable
let firstMovie = threeMovieArr[0]
//Get the length of the original array and store it in a new variable
let numofMovies = threeMovieArr.length
console.log(numofMovies)
//Get the last element in that array and store it in a new variable. What if your array was really large and you didn't know the last index? Would your solution still work?
let lastMovie = threeMovieArr[numofMovies - 1] //MrBean
console.log(lastMovie)
// ^ You would use this, if the last element is always changing