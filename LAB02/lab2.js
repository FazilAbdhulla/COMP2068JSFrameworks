
const prompt = require('prompt');

prompt.start();

prompt.get(['userSelection'], (err, result) => {
    if (err) {
        console.error('Error occurred while getting user input.');
        return;
    }

    const userSelection = result.userSelection.toUpperCase();

    const computerRandom = Math.random();
    let computerSelection;

    if (computerRandom <= 0.34) {
        computerSelection = 'PAPER';
    } else if (computerRandom <= 0.67) {
        computerSelection = 'SCISSORS';
    } else {
        computerSelection = 'ROCK';
    }

    console.log(`User Selection: ${userSelection}`);
    console.log(`Computer Selection: ${computerSelection}`);

    let outcome;

    if (userSelection === computerSelection) {
        outcome = "It's a tie";
    } else if (
        (userSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (userSelection === 'PAPER' && computerSelection === 'ROCK') ||
        (userSelection === 'SCISSORS' && computerSelection === 'PAPER')
    ) {
        outcome = 'User Wins';
    } else {
        outcome = 'Computer Wins';
    }
    console.log(`Outcome: ${outcome}`);
});
