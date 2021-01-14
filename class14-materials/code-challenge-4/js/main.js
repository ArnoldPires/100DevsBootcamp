//Please create a function that takes in two numbers. Print to the console the division of the these two numbers rounded down. 

document.querySelector('#enter').addEventListener('click', convert);

function convert() {
    const num1 = document.querySelector('#numOne').value;
    const num2 = document.querySelector('#numTwo').value;

    document.querySelector('#answer').innerHTML = num1 / num2;
    
    console.log(num1 / num2)
}

document.querySelector('#clear').addEventListener('click', erase);

function erase() {
    total = 0
    document.querySelector('#answer').innerText = total
}