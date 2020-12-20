// *Variables*
// Declare a variable, assign it a value, and alert the value
let monkey = 10;
let tuna = 12;
alert(monkey + tuna);
// Create a variable, divide it by 10, and console log the value
let pizza = 40
alert(pizza/10)
// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function badAtMath(num1, num2, num3) {
    let math = num1 * num2 * num3
    alert(math);
}
badAtMath(20,4,19)
// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
function fourNumAddSub(n1,n2,n3,n4) {
    let result = n1 + n2 - n3 - n4
}
fourNumAddSub(1,3,4,5)
console.log(1,3,4,5)
// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"
function threeNumAndAlert(n1,n2,n3) {
    let result = (100 + n1 - n2) / n3
    if(result > 25) {
        console.log("WE HAVE A WINNA!")
    }
}
threeNumAndAlert(20,10,5)
// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"
function dayOfWeek(day = "default") {
    let dayLowerCase = day.toLowerCase()
    if(dayLowerCase === "saturday" || dayLowerCase === "sunday") {
        alert("weekend")
    }else if (dayLowerCase === "monday" || dayLowerCase === "tuesday" || dayLowerCase === "wednesday" || dayLowerCase === "thursday" || dayLowerCase === "friday") {
       alert("week day")
    } else {
        alert("try again")
    }
}
//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
function logAllValuesToNum(num) {
    for(let i = 1;i <= num; i+=3) {
        console.log(i)
    }
}
logAllValuesToNum(12)