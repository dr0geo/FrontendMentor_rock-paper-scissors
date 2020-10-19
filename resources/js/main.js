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