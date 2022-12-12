function getComputerChoice() {
  randomNumber = Math.floor(Math.random()*3);

  //console.log(randomNumber);
  
  if (randomNumber < 1) {
  answer = 'rock';
  }
  else if (randomNumber === 1) {
  answer = 'paper';
  }
  else {
  answer = 'scissors';
  }

  //console.log(answer);
  //console.log(randomNumber)
}

//console.log(getComputerChoice());