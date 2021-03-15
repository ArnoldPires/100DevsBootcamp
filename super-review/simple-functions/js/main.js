//---Easy
//create a function that subtracts two numbers and alerts the difference
function subtract(num1, num2) {
    alert(num1 - num2)
}
//OR
function subs(n1, n2) {
    let difference = n1 - n2
    alert(difference)
}
subs(10, 5)
//create a function that divides three numbers and console logs the quotient
function divThreeNums(n1, n2, n3) {
    let differenceTwo = n1 / n2 / n3 
    console.log(differenceTwo)
}
divThreeNums(20,15,5)
//create a function that multiplys three numbers and returns the product
function mulThree(n1,n2,n3) {
    let differenceThree = n1 * n2 * n3
    console.log(differenceThree)
}
mulThree(2,6,8) //96
//---Medium
//create a function that takes in three numbers. 
//Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function takeThreeNums(n1, n2, n3) {
    let differenceFour = n1 + n2
    let differenceFive = n3
    console.log(differenceFour / differenceFive)
}
takeThreeNums(5,5,2) //5
//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. 
//If the product is greater than 100 add the sum of the last two numbers and console log the value. 
//If the product is less that 100, subtract the difference of the last two numbers and console log the value. 
//If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
function takeFourNums(n1, n2, n3, n4) {
    let differenceSix = n1 * n2
    let differenceSeven = n3
    let differenceEight = n4
        if(differenceSix > 100) {
            console.log(differenceSix + differenceSeven)
        } else if (differenceSix < 100) {
            console.log(differenceSix - differenceSeven)
        } else if (differenceSix === 100) {
            console.log(differenceSix * differenceSeven / differenceEight)
        }
}
takeFourNums(10, 15, 10, 10); // Greater than 100 (the last 10 does nothing) 10 * 15 = 150 + 10 = 160
takeFourNums(1, 2, 3, 4); //Less than 100 (The last 4 does nothing) 1 * 2 = 2 - 3 = -1
takeFourNums(20, 5, 40, 5); //Is 100 (20 * 5 = 100 * 40 = 4000 / 5 = 800)