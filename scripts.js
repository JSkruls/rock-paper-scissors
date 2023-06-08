let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {
    let random = Math.floor(Math.random() * 100);
    if(random >= 66) {
        random = `scissors`;
    }
    else if(random >= 33) {
        random = `paper`;
    }
    else {
        random = `rock`;
    }
    return random;
}

function playRound(humanChoice,computerChoice) {
    console.log(`h: ${humanChoice} c: ${computerChoice}`);
    if(humanChoice == computerChoice) {
        humanScore++;
        computerScore++;
        return `It's a tie!`; 
    }
    else if(humanChoice == `rock`) {
        if(computerChoice == `scissors`) {
            humanScore++
            return `You Win! Rock beats Scissors`;
        }
        else {
            computerScore++;
            return `You Lose! Paper beats Rock`;    
        }
    }
    else if(humanChoice == `paper`) {
        if(computerChoice == `rock`) {
            humanScore++
            return `You Win! Paper beats Rock`;
        }
        else {
            computerScore++;
            return `You Lose! Scissors beat Paper`;    
        }
    }
    else if(humanChoice == `scissors`) {
        if(computerChoice == `paper`) {
            humanScore++
            return `You Win! Scissors beat Paper`;
        }
        else {
            computerScore++;
            return `You Lose! Rock beats scissors`;    
        }
    }
}

function game(rounds) {
    for(i = 0; i < rounds; i++) {
        let playerSelection = prompt(`Select rock, paper or scissors`).toLowerCase();
        playRound(playerSelection,getComputerChoice());
    }
    if(humanScore > computerScore) {
        return `You've won with score of ${humanScore} : ${computerScore}`;   
    }
    else if(humanScore == computerScore){
        return `It's a tie of ${humanScore} : ${computerScore}`; 
    }
    else {
        return `You've lost with score of ${humanScore} : ${computerScore}`; 
    }
}
game(5);