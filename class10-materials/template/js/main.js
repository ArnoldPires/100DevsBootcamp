var count = 0;
function appear(){
	items = document.getElementsByClassName("block");
    if(count < items.length)
       	items[count++].style.display = "";
}

var count = 0;
function disappear(){
	items = document.getElementsByClassName("block");
    if(count < items.length)
       	items[count++].style.display = "block";
}

const synth = window.speechSynthesis;
document.querySelector('#welcome').addEventListener('click', run)

 function run() {
   const fName = document.querySelector('#firstName').value
   const lName = document.querySelector('#lastName').value
   const welcomeText =  `Welcome, ${fName} ${lName}. I am Cp-001. I am your helpful and loyal combat droid companion and I am reporting for Duty. `
   document.querySelector('#placeToWelcome').innerText = welcomeText
   let welcomeThis = new SpeechSynthesisUtterance(welcomeText);
   synth.speak(welcomeThis);
 }

document.querySelector('#talkOne').addEventListener('click', speak)

function speak (message) {
  const textOne = `hi`
  var msg = new SpeechSynthesisUtterance(textOne)
  document.querySelector('#text').innerText = textOne
  var voices = window.speechSynthesis.getVoices()
  msg.voice = voices[0]
  window.speechSynthesis.speak(msg)
}

document.querySelector('#talkTwo').addEventListener('click', speakTwo)

function speakTwo (message) {
  const textTwo = `hi there`
  var msg = new SpeechSynthesisUtterance(textTwo)
  document.querySelector('#text').innerText = textTwo
  var voices = window.speechSynthesis.getVoices()
  msg.voice = voices[0]
  window.speechSynthesis.speak(msg)
}

document.querySelector('#talkThree').addEventListener('click', speakThree)

function speakThree (message) {
  const textThree = `hi there again`
  var msg = new SpeechSynthesisUtterance(textThree)
  document.querySelector('#text').innerText = textThree
  var voices = window.speechSynthesis.getVoices()
  msg.voice = voices[0]
  window.speechSynthesis.speak(msg)
}

document.querySelector('#talkFour').addEventListener('click', speakFour)

function speakFour (message) {
  const textFour = `hi there again butt face`
  var msg = new SpeechSynthesisUtterance(textFour)
  document.querySelector('#text').innerText = textFour
  var voices = window.speechSynthesis.getVoices()
  msg.voice = voices[0]
  window.speechSynthesis.speak(msg)
}