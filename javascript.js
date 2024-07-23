

let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", function() {
        const humanChoice = this.getAttribute("class");
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    });
});


function getComputerChoice () {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random()*choices.length)];
}

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
        console.log ("Computer chose " + computerChoice);
        console.log ("Tie.");
        console.log ("Your score: " + humanScore +  
            " Computer Score: " + computerScore);
} }




/* function playGame(){ */
   /* for (let i = 0; i < 5; i++) */ /* { */
 /*    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();


    playRound(humanSelection, computerSelection); */
    


    /* if (i === 4) {  *///this makes sure that the below does not trigger on every round but only at the end
       /*  if (humanScore > computerScore) {
            alert ("You win the game!");
        } else if (humanScore < computerScore) {
            alert ("You lose! Computer wins the game!");
        } else {
            alert ("It's a tie!");
        }
     }
    } */
/* } */

  /*   playGame(); */
 
