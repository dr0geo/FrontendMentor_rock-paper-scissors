// Display rules when the rules button is clicked:

const rulesButton = document.getElementById('rules-button');
const rules = document.getElementById('rules');
let rulesCounter = 0;

const displayRules = () => {
  if (rulesCounter === 0) {
    rules.style.display = 'flex';
    rulesCounter = 1;
  } else {
    rules.style.display = 'none';
    rulesCounter = 0;
  }
}

rulesButton.addEventListener('click', displayRules);

// Close rules window when closing cross is clicked:

const closingCross = document.getElementById('close');

const closeRules = () => {
  rulesCounter = 1;
  displayRules();
}

closingCross.addEventListener('click', closeRules);



// Display screen with choice made by user:
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const rock = document.getElementById('rock');

const sections = document.getElementsByTagName('section');
const result = document.getElementById('result');

const choiceCircle = document.getElementsByClassName('circle')[0];


const displayPaper = (item, color) => {
  return function() {
    // Remove the three items from the page:
    for (let i = 0 ; i < 3 ; i++) {
      sections.item(i).style.display = 'none';
    }
    // Remove the background image of the main tag:
    document.getElementsByTagName('main').item(0).style.backgroundImage = 'none';

    // Display the selected item in first circle:
    result.style.display = 'flex';
    choiceCircle.classList.add('icon');
    choiceCircle.classList.add(`${item}`);
    choiceCircle.parentElement.classList.add('background');
    choiceCircle.parentElement.classList.add(`${color}`);
  }
}

paper.addEventListener('click', displayPaper('paper', 'blueColor'));
scissors.addEventListener('click', displayPaper('scissors', 'yellowColor'));
rock.addEventListener('click', displayPaper('rock', 'redColor'));