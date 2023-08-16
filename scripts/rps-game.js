//rps-game.js
//Made on: Aug 16th, 2023
//Author: Brett Smith    
//TODO: Improve with a table
//      Add GUI            
                
                //Pseudocode
                //Get user choice
                //Get computer choice
                //case statement for which one won

function getUserChoice() {
    let choice = prompt("Enter a choice (rock, paper, or scissors)");
    if(choice.toUpperCase() !== 'ROCK' && choice.toUpperCase() !== 'PAPER' && choice.toUpperCase() !== 'SCISSORS') {
        console.log(choice + ' is not a valid choice!');
        return null;
    }
    return choice.toUpperCase();
}

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
    } else { //scissors
        if(computer === 'ROCK') {
            return 'COMPUTER';
        } else if(computer === 'PAPER') {
            return 'USER';
        } else {    //scissors
            return 'TIE';
        }
    }
}

function game(answer) {
    if(answer.toUpperCase() === 'YES') {
        let userChoice = getUserChoice();
        let winner;
        while(answer.toUpperCase() === 'YES') {
            if(userChoice === null) {
                console.log("Try to enter another value");
            } else {
                winner = chooseWinner(userChoice, getComputerChoice());
                if(winner === 'TIE') {
                    console.log("There was a tie, go again");
                } else {
                    console.log(winner + " won!");
                    answer = prompt("Would you like to play again? (yes, no)");
                }
            }
            userChoice = getUserChoice();
        }
    } else {
        console.log('Stop being a scaredy cat. Refresh the page NOW!');
    }
}

game(prompt('Would you like to play a game of Rock Paper Scissors?').toUpperCase());

