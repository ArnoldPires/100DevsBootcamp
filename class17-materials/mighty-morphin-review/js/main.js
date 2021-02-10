// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let ween = "HALLOWEEN!"
console.log(ween)
//OR
let favHoliday = 'halloween'
favHoliday = favHoliday.toUpperCase()
console.log(favHoliday)
//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let str = "This is a string"
console.log(str.charAt(13),str.charAt(14),str.charAt(15))
alert(str.charAt(13))
alert(str.charAt(14)) 
alert(str.charAt(15))
//OR
let money = 'I am poor'
alert(money.slice(-3))
// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function nums(n1,n2,n3,n4,n5) {
   let diff = 100 - n1 - n2 - n3 - n4 - n5
   alert(Math.abs(diff));
}
nums(200,13,70,67,300)

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function threeNumbers(nOne,nTwo,nThree) {
    console.log(`The lowest is ${Math.min(nOne,nTwo,nThree)} and the highest is ${Math.max(nOne,nTwo,nThree)}`)
}
threeNumbers(77,6,100)

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
function headsOrTails() {
    let random = Math.random()
    if(random < .5) {
        return 'heads'
    }else {
        return 'tails'
    }
}
console.log(headsOrTails())
//OR
function headOrTail() {
    return Math.random() < .5 ? 'heads' : 'tails'
}
console.log(headOrTail())
//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
function flipACoin(num) {
    for(let i = 1; i <= num; i++) {
        let result = headsOrTails()
        console.log(result)
    }
}
flipACoin(5)