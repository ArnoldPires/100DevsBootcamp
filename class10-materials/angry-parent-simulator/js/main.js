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
        nextText: 6
      },
      {
        text: 'Blackmail',
        nextText: 7
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
    id: 6,
    text: 'I have fully stocked our armory with all the latest blasters, rockets, and thermal detonators. Its time to blow shit up!.',
    options: [
      {
        text: 'Continue',
        nextText: 8
      }
    ]
  },
  {
    id: 7,
    text: 'Ive found the targets family.  With your permission, I can threaten them to get our target to turn himself in or else..',
    options: [
      {
        text: 'Continue',
        nextText: 9
      }
    ]
  },
  {
    id: 8,
    text: 'We got the target, but he died during the firefight. We will still however, be rewarded. Would you like to play again?.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 9,
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