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
getComputerChoice();
