//Write your pseduo code first!

//click event (smurf)
document.querySelector('#zebra').addEventListener('click', convert)

function convert() {
  //get the value from the input
  const selseeyus = document.querySelector('#brainStorm').value
  //quick mafs convert it
  const convertedValue = selseeyus * 9/5 + 32
  //display the value
  document.querySelector('#talkThatTalk').innerText = convertedValue
}
