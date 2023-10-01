let humanScore = 0;
let computerScore = 0;
let playerSelection;

function getComputerChoice () {
  let random = Math.floor(Math.random() * 100);
  if(random >= 66) { 
    random = `scissors`; 
    computerHand.setAttribute('src','rps/scissors_red.png');
  }
  else if(random >= 33) { 
    random = `paper`; 
    computerHand.setAttribute('src','rps/paper_red.png');
  }
  else { 
    random = `rock`; 
    computerHand.setAttribute('src','rps/rock_red.png');
  }
  return random;
}

function playRound(humanChoice,computerChoice) {
  if(humanChoice == computerChoice) {
    return `It's a tie`; 
  }

  if(humanChoice == `rock` && computerChoice == `scissors`) {
    humanScore++;
    blueScore.textContent = humanScore;
    return `Rock beats scissors`;
  }
  else if (humanChoice == `rock` && computerChoice == `paper`) {
    computerScore++;
    redScore.textContent = computerScore;
    return `Paper beats rock`;    
  }

  if(humanChoice == `paper` && computerChoice == `rock`) {
    humanScore++
    blueScore.textContent = humanScore;
    return `Paper beats rock`;
  }
  else if(humanChoice == `paper` && computerChoice == `scissors`) {
    computerScore++;
    redScore.textContent = computerScore;
    return `Scissors beat paper`;    
  }

  if(humanChoice == `scissors` && computerChoice == `paper`) {
    humanScore++
    blueScore.textContent = humanScore;
    return `Scissors beat paper`;
  }
  else if(humanChoice == `scissors` && computerChoice == `rock`) {
    computerScore++;
    redScore.textContent = computerScore;
    return `Rock beats scissors`;    
  }
}

function game() {
  messageBox.textContent = playRound(playerSelection,getComputerChoice());
  if(humanScore == 5 || computerScore == 5) {
    lastLayer.classList.remove('hide');
    if(humanScore == computerScore) {
      return `It's a tie!`;   
    }
    else if(humanScore > computerScore) {
      return `You've won!`; 
    }
    else {
      return `You've lost!`; 
    }
  }
}

function makeInvisible() {
  firstLayer.classList.add('hide');
  midLayer.classList.toggle('hide');
}

function playerChoice() {
  playerHand.classList.remove('hide');
  computerHand.classList.remove('hide');
  messageBox.classList.remove('hide');

  if(this.getAttribute('class') == 'left button') {
    playerSelection = 'rock';
    playerHand.setAttribute('src','rps/rock_blue.png');
  }
  else if (this.getAttribute('class') == 'mid button') {
    playerSelection = 'paper';
    playerHand.setAttribute('src','rps/paper_blue.png');
  }
  else {
    playerSelection = 'scissors';
    playerHand.setAttribute('src','rps/scissors_blue.png');
  }
  gameResult.textContent = game();
}

function replayGame() {
  humanScore = 0;
  computerScore = 0;
  blueScore.textContent = humanScore;
  redScore.textContent = computerScore;
  lastLayer.classList.add('hide');
  playerHand.classList.add('hide');
  computerHand.classList.add('hide');
  messageBox.classList.add('hide');
}

const playButton = document.querySelector('.play');
const firstLayer = document.querySelector('.first');
const midLayer = document.querySelector('.mid');
const lastLayer = document.querySelector('.last');
const blueScore = document.querySelector('.score-blue');
const redScore = document.querySelector('.score-red');
const computerHand = document.querySelector('.computer-choice');
const playerHand = document.querySelector('.player-choice');
const messageBox = document.querySelector('.message');
const gameResult = document.querySelector('.game-result');
const playAgain = document.querySelector('.replay');
const buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach(button => button.addEventListener('click',playerChoice));
playButton.addEventListener('click',makeInvisible);
playAgain.addEventListener('click',replayGame);

// change alt text for images 
// push project to github and upload to odin project
// test on larger screen