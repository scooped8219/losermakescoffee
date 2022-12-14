//Initialize Scoring
let userScore = 0
let compScore = 0

function playRound() {
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
    
    return convertAction;
  }

  //Variable for computer action
  let computerChoice = getComputerChoice();

  //Variable for user's action
  let userChoice = getUserChoice()

  //Function to get user action
  function getUserChoice() {
    input = prompt("Rock, paper or scissors?").toLowerCase();
    while (input !== 'rock' && input !== 'paper' && input !=='scissors') {
      input = prompt("Try again: rock, paper or scissors?").toLowerCase();
    }
    return input;
  }

  //Display game info
  console.log("Shoot!");
  console.log("Computer chose " + computerChoice);
  console.log("Player chose " + userChoice);

  //Round Evaluation
  if (computerChoice === userChoice) {
    console.log("Draw!");
    }
  else {
    if (computerChoice === 'rock') {
      if (userChoice === 'paper') {
        console.log("Player wins");
        userScore++;    
      }
      else {
          console.log("Computer wins");
          compScore++;
      }
    }
    else if (computerChoice === 'paper') {
      if (userChoice === 'scissors') {
        console.log("Player wins");
        userScore++;   
      }
      else {
          console.log("Computer wins");
        compScore++;      
      }
    }
    else {
      if (userChoice === 'rock') {
        console.log("Player wins");
        userScore++;  
      }
      else {
          console.log("Computer wins");
        compScore++;      
      }
    }  
  }
  }

//Keep playing rounds until someone gets 3 points
for (i=0; i<100; i++) {
  while (userScore < 3 && compScore < 3) {
    playRound();
    console.log("Player has " + userScore + " points");
    console.log("Computer has " + compScore + " points");
  }
  
  if (userScore === 3 || compScore === 3) {
    announcer();
    break;
  }
}

//Function to user's win/lose status
function announcer() {
  if (userScore > compScore) {
    alert('You have won the game!');
  } else {
    alert('You have lost the game!');
  } 
}
