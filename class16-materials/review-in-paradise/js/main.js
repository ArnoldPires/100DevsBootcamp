// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let food = "pizza"
food = "burgers"
console.log(food)
//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
const moreFood = 'burger'
console.log(moreFood.charAt(1))
//OR
console.log(moreFood[2])
// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function threeNumbers(n1,n2,n3) {
    return (n1/n2) *n3
}
threeNumbers(2,4,6)
console.log(threeNumbers(2,4,6))
//OR
function threeNumbersTwo(num1,num2,num3) {
    console.log((num1/num2) * num3)
}
threeNumbersTwo(8,10,14) //PEMDAS
// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function takesOneNumber(n1) {
    return (n1)
}
console.log(Math.cbrt(takesOneNumber(64)));
//OR
function cubeNumber(num) {
    console.log(Math.cbrt(num))
}
cubeNumber(15)
// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function checkForSummer(month) {
    let months = month.toLowerCase()
    if(months === "june" || months === "july" || months === "august") {
        alert("YAY!");
    } else {
        alert("Boo!");
    }
}
checkForSummer('may')
//OR
let askForMonth = prompt("Which month is it?");
let whatMonth = askForMonth.toLowerCase()
    if (whatMonth === "june" || whatMonth === "july" || whatMonth === "august") {
        alert("Yay it's Summer!")
    } else {
        alert("Boo, it's not Summer!")
    }

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function skipFives(nums) {
    for(let index = 1; index <= nums; index++) {
        if(index%5 !== 0) {
            console.log(index)
        }
    }
}
skipFives(20)