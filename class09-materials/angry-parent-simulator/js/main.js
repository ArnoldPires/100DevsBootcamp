document.querySelector('#yell').addEventListener('click', run)

function run() {
  const fName = document.querySelector('#firstName').value
  const lName = document.querySelector('#lastName').value

  document.querySelector('#placeToYell').innerText = fName + ' ' + ' ' + lName

  //Add what you should be doing - conditionals go here

  document.querySelector('#placeToYell').innerText = `${fName} ${lName}`
}

const synth = window.speechSynthesis;
 document.querySelector('#yell').addEventListener('click', run)

 function run() {
   const fName = document.querySelector('#firstName').value
   const lName = document.querySelector('#lastName').value

   const yellText =  `You have failed me for the last time, ${fName} ${lName}, Now Make ready to land our troops beyond the energy shield and deploy the fleet so that nothing gets off the system. You are in command now, ${fName} ${lName} `

   document.querySelector('#placeToYell').innerText = yellText

   let yellThis = new SpeechSynthesisUtterance(yellText);

   synth.speak(yellThis);
 }
