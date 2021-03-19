// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". 
//If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".

function takeInArray(n1,n2) {
    if (n1 < n2) {
        alert('Hi')
    } else if (n1 > n2) {
    alert('Bye')
    } else if (n1 = n2) {
    alert('We close in an hour')
    }
} 
takeInArray(5, 10); //Hi
takeInArray(10,5); //Bye
takeInArray(10,10); //We close in an hour

//OR

function hiOrBye(arr) {
    if (arr[0] > arr[arr.length - 1]) {
      console.log("Hi");
    } else if (arr[0] < arr[arr.length - 1]) {
      console.log("Bye");
    } else if (arr[0] = arr[arr.length - 1]) {
      console.log("We close in an hour");
    }
}
hiOrBye(5, 10);
hiOrBye(10, 5);
hiOrBye(10, 10);