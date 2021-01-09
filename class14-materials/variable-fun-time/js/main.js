//--- Easy
//create a variable and assign it a boolean
let booLean = false;
//create a variable and assign it a string that is a number
let num = '18';
//add 10 to that number - how?!? https://media.giphy.com/media/lkdH8FmImcGoylv3t3/giphy.gif
num = Number(num) + 10;
//print that number to the console
console.log(num);
//--- Medium
//create a variable that holds a value from the input
document.querySelector('#mrRightNow').addEventListener('click', add21);

function add21() {
    let inputVal = Number(document.querySelector('input').value)
//add 21 to that number
    inputVal = inputVal + 21
//alert that number
    alert(inputVal)
}
//--- Hard
//create a variable that holds the h1
let mrRightNow = document.querySelector('#mrRightNow')
//add an event listener to that element that places the product of the two previous variables in the DOM
mrRightNow.addEventListener('click', stunt)

function stunt() {
    document.querySelector('#needSomeTLC').innerText = num * num
}