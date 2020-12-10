//This is a small text adventure
//You are a bounty hunter going after your next target
//You and your robot friend Cp-001 are on hot presuit of your target
//This text adventure goes over your plans to capture or kill the target before it happens

//The start:
//Enter your bounty hunter name:
//Cp-001 says your name and welcomes you back to the ship and introduces himself
//You hit continue
//Cp-001 tells you who the target is and presents you with a few different choices
//On how best to capture the target
//Choices:
//Speed chase
//Guns a blazing
//Blackmail:
//Speed chase: Cp-001 preps the ship with speed boosters and a tracking beacon
//Guns a blazing: Cp-001 hands you some blasters, rockets, and thermal detonators
//Blackmail: Cp-001 finds out the target has a family and threatens the targets family
//in order to bring the target in
//Speed chase ending: The target escapes in the speed chase
//Guns a blazing: The target is killed during the firefight
//Blackmail: The target believes the blackmail and surrenders

//The code:
//A button to activate the game
//Cp-001 says your name and welcomes you
//A continue button
//Cp-001 tells you about the target and asks you to pick the three choices
//User selects one of the choices
//Cp-001 tells you the ending result of the choice you made
//You are asked if you'd like to play again


//What cp-001 will say:
//Intro
//Hello (your name here) I am Cp-001 and I am your helpful bounty droid.
//Please select the continue button to continue with our bounty target
//Our target is a notorious thug whose murdered several people in many different sectors of space
//Are orders are to bring him in, dead or alive
//Hit the continue button
//I have laid out 3 different possible choices to accomplish our mission
//Select the choice you want
//Speed chase:
//I will begin preping the ship with a tractor beam and speed boosting capibilities
//Hit continue
//CP-001 says: Unfortunately, during the chase, the target escaped would you like to play again?
//Guns a blazing:
//I have fully stocked our armory with all the latest blasters, rockets, and thermal detonators.
//Lets blow some shit up!
//Hit continue
//We got the target, but he died during the firefight.However, we will still get rewarded. Would you like to play again?
//Blackmail:
//I've found the targets family. I can threaten them to get our target to turn himself in or else.
//Hit continue
//Success
//The target will cooperate with us and turn himself in to us for capture. Will you like to play again?

//Enter name/ Droid welcomes you
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
var utterThis = new SpeechSynthesisUtterance('#text');
const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
    text: '',
    options: [
      {
        text: 'Who is our bounty target for today?',
        nextText: 2
      },
    ]
  },
  {
    id: 2,
    
    text: 'Our target is a notorious thug whose murdered several people in many different sectors of space. Our orders are to bring him in, dead or alive.',
    options: [
      {
        text: 'Continue',
        nextText: 3
      }
    ]
  },
  {
    id: 3,
    text: 'I have selected three different approches we can take to accomplish our mission. Please select one.',
    options: [
      {
        text: 'Speed Chase',
        nextText: 4
      },
      {
        text: 'Guns a Blazing',
        nextText: 51
      },
      {
        text: 'Blackmail',
        nextText: 6
      }
    ]
  },
  {
    id: 4,
    text: 'Excellent, I will prep the ship with speed boosters and a tractor beam.',
    options: [
      {
        text: 'Continue',
        nextText: 5
      }
    ]
  },
  {
    id: 5,
    text: 'Unfortunately, during the chase, the target escaped. Would you like to play again?.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 51,
    text: 'I have fully stocked our armory with all the latest blasters, rockets, and thermal detonators. Its time to blow shit up!.',
    options: [
      {
        text: 'Continue',
        nextText: 9
      }
    ]
  },
  {
    id: 6,
    text: 'Ive found the targets family.  With your permission, I can threaten them to get our target to turn himself in or else..',
    options: [
      {
        text: 'Continue',
        nextText: 7
      }
    ]
  },
  {
    id: 9,
    text: 'We got the target, but he died during the firefight. We will still however, be rewarded. Would you like to play again?.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 7,
    text: 'Success! The target will cooperate with us and turn himself in to us for capture. Will you like to play again?',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  }
]
startGame()

