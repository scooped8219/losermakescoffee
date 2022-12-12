//Function to generate the computer's action
function getComputerChoice() {
  randomNumber = Math.floor(Math.random()*3);
  
  if (randomNumber === 0) {
  convertAction = 'rock';
  }
  else if (randomNumber === 1) {
  convertAction = 'paper';
  }
  else {
  convertAction = 'scissors';
  }
  
  return convertAction
}

//Variable for computer action
let computerChoice = getComputerChoice();

//Variable for user's action
let userChoice = prompt("Rock, paper or scissors?").toLowerCase();

//Function to prompt for user
function getUserChoice(userChoice) {
  return userChoice;
}

//Ask User
getUserChoice()
//Ask Computer
getComputerChoice()

//Display game info
console.log("Shoot!");
console.log("Computer chose " 
+ computerChoice);
console.log("Player chose " 
+ userChoice);

//Round Evaluation
if (computerChoice === userChoice) {
  console.log("Draw!");
  }
else {
  if (computerChoice === 'rock') {
    if (userChoice === 'paper') {
      console.log("Player wins");
    }
    else {
        console.log("Computer wins");
      }
  }
  else if (computerChoice === 'paper') {
    if (userChoice === 'scissors') {
      console.log("Player wins");
    }
    else {
        console.log("Computer wins");
      }
  }
  else {
    if (userChoice === 'rock') {
      console.log("Player wins");
    }
    else {
        console.log("Computer wins");
      }
  }  
}

