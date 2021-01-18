//Create an array of movie titles. Loop through the array and add each element to the h2. 
let movieTitles = [' ToyStory  ', ' LordOfTheRings  ', '  StarWars '] 
movieTitles.forEach((item, i) => {
    document.querySelector('h2').innerText += item
})
console.log(movieTitles)
//OR ^ They are both the same thing
for(let f = 0; f < movieTitles.length; f++) {
    document.querySelector('h2').innerText += movieTitles[f]
}
//Create an array of numbers. Loop through the array and three to each number and replace the old number.
let nums = [1,2,3]
nums.forEach((itemTwo, g) => {
    nums[g] = itemTwo + 3
});
console.log(nums)
//Find the average of all the numbers from question two
let sum = 0
for(let h = 0; h<nums.length;h++) {
    sum += nums[h]
}
console.log(sum / nums.length)