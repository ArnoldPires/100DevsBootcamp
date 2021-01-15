//Please create a function that takes in a number and a word. If the length of the word multiplied by the number passed into the function is greater than 100, alert "WINNER"!

document.querySelector('#enter').addEventListener('click', convert)

function convert() {
   const  number = document.querySelector('#number').value;
   const text = document.querySelector('#text').value;

   document.querySelector('#answer').innerHTML = number * text.length;
   console.log(number * text.length)
   if (number * text.length > 100) {
       alert("WINNER!")
   }
} 