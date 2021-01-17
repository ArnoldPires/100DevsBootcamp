//Please create a function that takes in an array. The function should console.log() the sum of the first value in the array and the last value in the array

document.querySelector('#enter').addEventListener('click', enter)

function enter() {
    let array = ["5 ", "4 ", "3 ", "2 ", "1" ];
        document.querySelector("#otherAnswer").innerHTML = array[0] + array[array.length - 1];
        document.querySelector("#answer").innerHTML = `${array}`
        console.log(array[0] + array[array.length - 1])
}