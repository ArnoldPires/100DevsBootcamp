// *Variables*
// Create a variable and console log the value
let x = '123'
console.log(x)
// Create a variable, add 10 to it, and alert the value
let y = 5
console.log(y + 10)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subFour(n1,n2,n3,n4) {
    let nums = n1 - n2 - n3 - n4
    console.log(nums)
}
subFour(100,50,10,5)
// Create a function that divides one number by another and returns the remainder
function divNum(n1,n2) {
    let divides = n1 / n2
    console.log(divides)
}
divNum(10,5)
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addTwoNums(n1,n2) {
    let addsTwo = n1 + n2
        if (addsTwo > 50) {
            alert('Jumanji')
        } else {
            alert('That movie sucked anyway')
        }
}
addTwoNums(50,50)
addTwoNums(10, 10);
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function mulThreeNums(n1,n2,n3) {
    let multiplys = n1 * n2 * n3
     if (multiplys % 3 === 0) {
         alert('ZEBRA')
     } else {
         alert('NO ZEBRA')
     } 
}
mulThreeNums(1,2,3) //ZEBRA
mulThreeNums(100, 70, 50); //NO ZEBRA
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function takeInWord() {
    let strNum = ['', 4]
    for (let x = 0; x <= strNum.length; x++) {
        console.log(strNum[x])
    }
}
takeInWord('Hello',4)