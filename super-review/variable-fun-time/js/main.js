//--- Easy
//create a variable and assign it a number
let x = 123
//minus 10 from that number
result = x - 10
//print that number to the console
console.log(result)

//OR

let arnoldAge = 28
arnoldAge -= 10
console.log(arnoldAge)

//--- Medium
//create a variable that holds a value from the input
            //let inputValue = Number(document.querySelector('input').value)
//add 25 to that number
            //let inputValue += 25
//alert that number
            //alert(inputValue)
//--- Hard
//create a variable that holds the h1

//add an event listener to that element that console logs the sum of the two previous variables
document.querySelector("h1").addEventListener("click", alertValue);
function alertValue() {
  let inputValue = Number(document.querySelector("input").value);
  inputValue += 25;
  alert(inputValue);
}