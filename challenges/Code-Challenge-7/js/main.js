//Please create a function that takes in the name of a person. This function should add this person to a names list and let them know their position on the list. The names list should be created outside of the function

document.querySelector('#enter').addEventListener('click', enter);
let nameList = ["Tim", " Blake", " Nacy", " Thalia"];

function enter(name) {
    document.querySelector("#name").innerHTML = nameList;
    const number = nameList.push(name)
    console.log(number)
}