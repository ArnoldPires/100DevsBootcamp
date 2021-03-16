//Write your pseduo code first!
//Create a temp converter for cel and fahren temps
//click event (smurf)
document.querySelector("#tempConvert").addEventListener("click", convert);

function convert() {
  //get the value from the input
  const celsius = document.querySelector("#celsius").value;
  //quick mafs convert it
  const convertedValue = (celsius * 9) / 5 + 32;
  //display the value
  document.querySelector("#show").innerText = convertedValue;
}

document.querySelector("#tempConvertTwo").addEventListener("click", convertTwo);

function convertTwo() {
  //get the value from the input
  const fahren = document.querySelector("#fahren").value;
  //quick mafs convert it
  const convertedValueTwo = ((fahren - 32) * 5) / 9;
  //display the value
  document.querySelector("#showTwo").innerText = convertedValueTwo;
}