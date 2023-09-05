//rps-game.js
//Made on: Aug 16th, 2023
//Author: Brett Smith    
//TODO: Improve with a table
//      Add GUI            

function getComputerChoice() {
    let x = Math.floor((Math.random() * 3));
    if(x === 0) return 'ROCK';
    else if(x === 1) return 'PAPER';
    else return 'SCISSORS';
}



function chooseWinner(user, computer) {
    console.log('User: ' + user);
    console.log('Computer: ' + computer);
    if(user === 'ROCK') {
        if(computer === 'ROCK') {
            return 'TIE';
        } else if(computer === 'PAPER') {
            return 'COMPUTER';
        } else {    //scissors
            return 'USER';
        }
    } else if(user === 'PAPER') {
        if(computer === 'ROCK') {
            return 'USER';
        } else if(computer === 'PAPER') {
            return 'TIE';
        } else {    //scissors
            return 'COMPUTER';
        }
    } else {        //scissors
        if(computer === 'ROCK') {
            return 'COMPUTER';
        } else if(computer === 'PAPER') {
            return 'USER';
        } else {    //scissors
            return 'TIE';
        }
    }
}

let userScore = 0;
let computerScore = 0;

function game(userChoice) {
    let winner = chooseWinner(userChoice, getComputerChoice());
    if(winner === 'TIE') {
        alert("There was a tie, go again");
    } else {
        if(winner === 'COMPUTER') {
            computerScore++;
        } else {
            userScore++;
        }
        updateScoreBoard();
    }
    if(userScore === 5) {
        alert('YOU WON!');
        userScore = 0;
        computerScore = 0;
        updateScoreBoard();
    } else if(computerScore === 5) {
        alert('COMPUTER WON :(');
        userScore = 0;
        computerScore = 0;
        updateScoreBoard();
    }

}

function updateScoreBoard() {
    document.getElementById('user-score').textContent = `User: ${userScore}`;
    document.getElementById('computer-score').textContent = `Computer: ${computerScore}`;
}

let resultDisplay = document.querySelector('.result-display');
let rockButton = document.getElementById('rock-button');
let paperButton = document.getElementById('paper-button');
let scissorsButton = document.getElementById('scissors-button');

rockButton.addEventListener('click', () => game('ROCK'));
paperButton.addEventListener('click', () => game('PAPER'));
scissorsButton.addEventListener('click', () => game('SCISSORS'));

updateScoreBoard(); //initialize


