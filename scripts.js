let playerSelection = prompt(`Select rock, paper or scissors`).toLowerCase();

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
    if(humanChoice == computerChoice) {
        return `It's a tie!`; 
    }
    else if(humanChoice == `rock`) {
        if(computerChoice == `scissors`) {
            return `You Win! Rock beats Scissors`;
        }
        else {
            return `You Lose! Paper beats Rock`    
        }
    }
    else if(humanChoice == `paper`) {
        if(computerChoice == `rock`) {
            return `You Win! Paper beats Rock`;
        }
        else {
            return `You Lose! Scissors beat Paper`    
        }
    }
    else if(humanChoice == `scissors`) {
        if(computerChoice == `paper`) {
            return `You Win! Scissors beat Paper`;
        }
        else {
            return `You Lose! Rock beats scissors`    
        }
    }
}
playRound(playerSelection,getComputerChoice());