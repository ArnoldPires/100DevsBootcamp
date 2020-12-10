var synth = window.speechSynthesis;
var inputForm = document.querySelector('form');
var inputTxt = document.querySelector('.txt');

function speak(){
    if (synth.speaking) {
        console.error('speechSynthesis.speaking');
        return;
    }
    if (inputTxt.value !== '') {
    var utterThis = new SpeechSynthesisUtterance(inputTxt.value);
    utterThis.onend = function (event) {
        console.log('SpeechSynthesisUtterance.onend');
    }
    utterThis.onerror = function (event) {
        console.error('SpeechSynthesisUtterance.onerror');
    }
    synth.speak(utterThis);
  }
}

inputForm.onsubmit = function(event) {
  event.preventDefault();
  speak();
  inputTxt.blur();
}




