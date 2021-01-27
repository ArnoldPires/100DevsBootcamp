// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let favDrink = " water"
favDrink = favDrink.trim()
console.log(favDrink)
//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let multiword = "car rainbow apple"
if(multiword.search("apple") !== -1) {
    console.log("yes")
} else {
    console.log("no")
}
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

 function rockPaperScissors() {
     let ccp= Math.random();
     if (ccp < 0.33) {
       document.querySelector("#rpsAnswer").innerHTML = "Rock";
    } else if (ccp < 0.66) {
      document.querySelector("#rpsAnswer").innerHTML = "Paper";
    } else {
       document.querySelector("#rpsAnswer").innerHTML = "Scissors";
    }
 }
// // *Conditionals*
// //Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
 function checkWin (choice) {
     let botChoice = rockPaperScissors()
     if((choice === "rock" && botChoice === "scissors") || (choice === "paper" && botChoice === "rock") || (choice === "scissors" && botChoice === "paper")) {
         console.log("You Win!")
         document.querySelector("#wtl").innerHTML = "You Win!";
     } else if(choice === botChoice) {
         console.log("You Tied!")
         document.querySelector("#wtl").innerHTML = "You Tied!";
     }else {
         console.log("You Lost!")
         document.querySelector("#wtl").innerHTML = "You Lost!";
     }
 }
  checkWin('rock')
 checkWin("paper");
  checkWin("scissors");
//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
