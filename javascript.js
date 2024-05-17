// What inputs will your program have? Will the user enter data or will you get input from somewhere else?
        // User will have to input Rock Paper or Scissors
   
    // What’s the desired output?
        // the computer will randomly pick between rock paper scissors to try to beat the user input
     
       
    // Given your inputs, what are the steps necessary to return the desired output?
        // When a user picks either rock, paper or scissor
       
        // Computer randomly outputs rock, paper or scissor

    // Create arguments [Rock>Scissors, Paper > Rock, Scissors > Paper]
        //Whoever has the greater output wins

function getComputerChoice () {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random()*choices.length)];
}

function getHumanChoice() {
    let input = prompt("Enter Rock, Paper, or Scissors").toLowerCase().trim();
    if (!input) {
        alert("Invalid choice, please try again.");
        return getHumanChoice(); // Ask again for valid input
    }
    if (['rock', 'paper', 'scissors'].includes(input)) {
        return input;
    } else {
        alert("Invalid choice, please try again.");
        return getHumanChoice(); // Ask again for valid input
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'rock' && computerChoice === 'scissors') { 
        ++humanScore;
        console.log ("Computer chose " + computerChoice);
        console.log ("You win! Rock beats scissors!");
        console.log ("Your score: " + 
        humanScore + " Computer Score: " + computerScore );
    } else if  (humanChoice === 'paper' && computerChoice === 'rock') {
        ++humanScore;
        console.log ("Computer chose " + computerChoice);
        console.log ("You win! Paper beats rock!");
        console.log ("Your score: " + 
        humanScore + " Computer Score: " + computerScore );
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        ++humanScore;
        console.log ("Computer chose " + computerChoice);
        console.log ("You win! Scissors beats paper!");
        console.log ("Your score: " + 
        humanScore + " Computer Score: " + computerScore );
    } else if (humanChoice === 'rock' && computerChoice === 'paper') {
        ++computerScore;
        console.log ("Computer chose " + computerChoice);
        console.log ("You lose! Paper beats rock!");
        console.log ("Your score: " + 
        humanScore + " Computer Score: " + computerScore );
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        ++computerScore;
        console.log ("Computer chose " + computerChoice);
        console.log ("You lose! Scissors beats paper!");
        console.log ("Your score: " + 
        humanScore + " Computer Score: " + computerScore );
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        ++computerScore;
        console.log ("Computer chose " + computerChoice);
        console.log ("You lose! Rock beats scissors!");
        console.log ("Your score: " + 
        humanScore + " Computer Score: " + computerScore );
    } else { 
        console.log ("Computer chose " + computerChoice + 
        ". Tie. Your score: " + 
        humanScore + " Computer Score: " + computerScore);}
}

function playGame() {
   for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();


    playRound(humanSelection, computerSelection);
    


    if (i === 4) { //this makes sure that the below does not trigger on every round but only at the end
        if (humanScore > computerScore) {
            alert ("You win the game!");
        } else if (humanScore < computerScore) {
            alert ("You lose! Computer wins the game!");
        } else {
            alert ("It's a tie!");
        }
     }
    }
}

    playGame();